import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface InteractiveGlobeProps {
  rotationSpeed?: number; // Base auto-rotation speed multiplier
  damping?: number;       // Damping factor for drag momentum (e.g. 0.05 means 95% retention per frame)
  particleCount?: number; // Number of glowing particle nodes
  className?: string;     // Custom styling container class
}

export default function InteractiveGlobe({
  rotationSpeed = 0.5,
  damping = 0.05,
  particleCount = 400,
  className = "w-full h-full min-h-[400px] relative overflow-hidden bg-black"
}: InteractiveGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Core Group ---
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Wireframe Globe (Electric Teal #00D9FF)
    const sphereGeo = new THREE.IcosahedronGeometry(2.4, 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const globeMesh = new THREE.Mesh(sphereGeo, wireframeMat);
    globeGroup.add(globeMesh);

    // Inner Accent Wireframe Core
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerCore);

    // 2. Particle Nodes
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorTeal = new THREE.Color(0x00d9ff);
    const colorWhite = new THREE.Color(0xffffff);
    const colorPlasma = new THREE.Color(0xff00ff);

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles on sphere surface + subtle radial variation
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + (Math.random() - 0.5) * 0.4;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      // Color mixing (Teal, White, Plasma accent)
      const rand = Math.random();
      let pColor = colorTeal;
      if (rand > 0.85) pColor = colorPlasma;
      else if (rand > 0.6) pColor = colorWhite;

      particleColors[i * 3] = pColor.r;
      particleColors[i * 3 + 1] = pColor.g;
      particleColors[i * 3 + 2] = pColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle texture canvas for soft circular glow
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(0, 217, 255, 0.8)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.9,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // Ring Orbits
    const ringGeo = new THREE.TorusGeometry(3.2, 0.008, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00d9ff, transparent: true, opacity: 0.3 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    globeGroup.add(ringMesh);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x00d9ff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d9ff, 2, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // --- Interactive Mouse Drag / Momentum State ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      // Calculate rotation speed based on drag distance
      // X-axis rotation = vertical drag distance (deltaY)
      // Y-axis rotation = horizontal drag distance (deltaX)
      const sensitivity = 0.005;
      velocity.x = deltaY * sensitivity;
      velocity.y = deltaX * sensitivity;

      globeGroup.rotation.x += velocity.x;
      globeGroup.rotation.y += velocity.y;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domTarget = renderer.domElement;
    domTarget.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domTarget.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // --- Animation Loop with Damping & Momentum ---
    let animationFrameId: number;
    const baseAutoSpeed = 0.002 * rotationSpeed;
    const dampingFactor = Math.max(0.8, Math.min(0.99, 1 - damping));

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        // Apply inertia/momentum
        globeGroup.rotation.x += velocity.x;
        globeGroup.rotation.y += velocity.y + baseAutoSpeed;

        // Apply damping to velocity
        velocity.x *= dampingFactor;
        velocity.y *= dampingFactor;
      }

      // Slow counter-rotation for inner core & ring for extra depth
      innerCore.rotation.y -= 0.004;
      ringMesh.rotation.z += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      domTarget.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);

      domTarget.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      sphereGeo.dispose();
      wireframeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [rotationSpeed, damping, particleCount]);

  return <div ref={mountRef} className={className} style={{ touchAction: 'none' }} />;
}
