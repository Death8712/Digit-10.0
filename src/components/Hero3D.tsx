import { useRef, useMemo, useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Safe WebGL feature detection helper
function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// Resilient Error Boundary for WebGL initialization crashes
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Rendering fallback active:', error?.message || errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Sophisticated CSS/SVG Cyber Hologram Fallback
function CyberTechFallbackVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Radial ambient glow */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-cyan/15 blur-[90px] animate-pulse" />
      <div className="absolute right-28 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-neon-purple/15 blur-[70px]" />

      {/* Cybernetic Hologram Core Rings */}
      <div className="relative w-80 h-80 flex items-center justify-center opacity-80 scale-90 lg:scale-110 lg:translate-x-20">
        {/* Outer dashed spinning ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/30 animate-[spin_25s_linear_infinite]" />
        
        {/* Middle counter-rotating ring */}
        <div className="absolute inset-6 rounded-full border-2 border-neon-cyan/20 border-t-neon-cyan/80 border-b-neon-purple/80 animate-[spin_15s_linear_infinite_reverse]" />
        
        {/* Third geometric ring with tick accents */}
        <div className="absolute inset-14 rounded-full border border-white/15 animate-[spin_35s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00F0FF]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_#b026ff]" />
        </div>

        {/* Inner geometric core */}
        <div className="absolute inset-24 rounded-2xl border border-neon-cyan/40 rotate-45 animate-[spin_10s_ease-in-out_infinite_alternate] bg-neon-cyan/5 backdrop-blur-xs flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.2)]">
          <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 border border-neon-cyan rotate-45 animate-pulse" />
        </div>

        {/* Floating crosshair nodes */}
        <div className="absolute -top-3 right-10 flex items-center gap-1 font-mono text-[9px] text-neon-cyan/70 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
          <span>SYS.RENDER: 2D_ACCEL</span>
        </div>
      </div>
    </div>
  );
}

function DataNodes({ radius = 1.9, count = 120 }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useMemo(() => {
    // We defer setting matrices to useEffect/useLayoutEffect, 
    // but we can also just do it once if we have ref ready.
  }, []);

  useEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      
      dummy.position.set(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
      const scale = Math.random() * 0.5 + 0.2; // roughly scales the radius of 0.1 to 0.02-0.07
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count, radius, dummy]);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <octahedronGeometry args={[0.1, 0]} />
        <meshStandardMaterial color="#00F0FF" emissive="#00F0FF" emissiveIntensity={5} />
      </instancedMesh>
      <pointLight color="#00F0FF" intensity={4} distance={6} decay={2} />
    </group>
  );
}

function RefractiveGlassCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * -0.08;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={coreRef}>
      {/* Multifaceted geometric core */}
      <icosahedronGeometry args={[2.1, 0]} />
      <meshPhysicalMaterial 
         color="#0A1628" 
         opacity={0.4} 
         transparent={true}
         roughness={0.2} 
         metalness={0.8}
         clearcoat={1} 
         clearcoatRoughness={0.1}
         emissive="#008080"
         emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ComplexWireframe() {
  const wireRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (wireRef.current) {
      wireRef.current.rotation.y = state.clock.elapsedTime * -0.05;
      wireRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ringsRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Intersecting Dodecahedrons */}
      <group ref={wireRef}>
        <mesh>
          <dodecahedronGeometry args={[2.5, 0]} />
          <meshStandardMaterial 
             color="#00F0FF" 
             wireframe 
             transparent 
             opacity={0.3} 
             emissive="#00F0FF" 
             emissiveIntensity={0.8} 
          />
        </mesh>
        
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <dodecahedronGeometry args={[2.6, 0]} />
          <meshStandardMaterial 
             color="#00F0FF" 
             wireframe 
             transparent 
             opacity={0.15} 
             emissive="#00F0FF" 
             emissiveIntensity={0.5} 
          />
        </mesh>
      </group>

      {/* Thin Orbital Rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.8, 0.006, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0.4, 0]}>
          <torusGeometry args={[4.4, 0.003, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingParticles({ count = 200 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3]     = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <Points ref={pointsRef} positions={points}>
      <PointMaterial
        transparent
        color="#00F0FF"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingGeometries() {
  const groupRef = useRef<THREE.Group>(null);
  
  const shapes = useMemo(() => {
    return new Array(8).fill(0).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15 - 5
      ),
      rotation: new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale: Math.random() * 0.5 + 0.2,
      type: Math.random() > 0.5 ? 'orb' : 'monolith',
      speed: Math.random() * 0.2 + 0.1
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const shape = shapes[i];
        child.position.y = shape.position.y + Math.sin(state.clock.elapsedTime * shape.speed) * 1.5;
        child.rotation.x += 0.001 * shape.speed;
        child.rotation.y += 0.002 * shape.speed;
      });
    }
  });

  const orbGeom = useMemo(() => new THREE.SphereGeometry(1, 32, 32), []);
  const boxGeom = useMemo(() => new THREE.BoxGeometry(1, 4, 1), []);
  const sharedMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#000000", 
    metalness: 0.9, 
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
    envMapIntensity: 2
  }), []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh 
          key={i} 
          position={shape.position} 
          rotation={[shape.rotation.x, shape.rotation.y, shape.rotation.z]} 
          scale={shape.scale}
          geometry={shape.type === 'orb' ? orbGeom : boxGeom}
          material={sharedMat}
        />
      ))}
    </group>
  );
}

function CyberTechArtifact() {
  const { viewport } = useThree();
  const xOffset = Math.min(viewport.width * 0.25, 4.5);
  // Reduce base scale to make it more compact
  const mobileScale = Math.min(viewport.width / 14, 1) * 1.05;

  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const groupRef = useRef<THREE.Group>(null);
  const rotateGroupRef = useRef<THREE.Group>(null);

  const prevMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  // Mouse / Touch drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    prevMousePos.current = { x: e.clientX, y: e.clientY };
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    e.stopPropagation();
    const deltaX = e.clientX - prevMousePos.current.x;
    const deltaY = e.clientY - prevMousePos.current.y;

    velocity.current = {
      x: deltaY * 0.005,
      y: deltaX * 0.005,
    };

    if (rotateGroupRef.current) {
      rotateGroupRef.current.rotation.x += velocity.current.x;
      rotateGroupRef.current.rotation.y += velocity.current.y;
    }

    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (_) {}
  };

  // Smoothly lerp towards target scale and position, and apply momentum rotation
  useFrame(() => {
    if (groupRef.current) {
      const targetScale = hovered ? mobileScale * 1.15 : mobileScale;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      groupRef.current.position.lerp(new THREE.Vector3(xOffset, 1.2, 0), 0.1);
    }

    if (rotateGroupRef.current && !isDragging) {
      rotateGroupRef.current.rotation.x += velocity.current.x;
      rotateGroupRef.current.rotation.y += velocity.current.y;

      // Apply damping to velocity
      velocity.current.x *= 0.94;
      velocity.current.y *= 0.94;
    }
  });

  // Change cursor on hover & drag
  useEffect(() => {
    document.body.style.cursor = isDragging ? 'grabbing' : hovered ? 'grab' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, isDragging]);

  return (
    <group 
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={rotateGroupRef}>
          <DataNodes />
          <RefractiveGlassCore />
          <ComplexWireframe />
          <FloatingParticles />
        </group>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());

    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(pointer: coarse)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const el = containerRef.current;
    if (!el) return () => window.removeEventListener('resize', checkDesktop);

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.01 });

    observer.observe(el);
    return () => {
      window.removeEventListener('resize', checkDesktop);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {isVisible && isDesktop && hasWebGL ? (
        <WebGLErrorBoundary fallback={<CyberTechFallbackVisual />}>
          <Canvas 
            dpr={[1, 1.5]} 
            gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping, alpha: true, powerPreference: "default" }} 
            camera={{ position: [14, 11, 14], fov: 28 }}
            fallback={<CyberTechFallbackVisual />}
          >
            <ambientLight intensity={0.4} color="#00F0FF" />
            <spotLight position={[10, 15, 10]} intensity={150} color="#00F0FF" penumbra={0.5} distance={50} angle={0.8} />
            <spotLight position={[-15, -10, -15]} intensity={100} color="#00F0FF" penumbra={1} distance={50} />
            <directionalLight position={[6, -2, 10]} intensity={2.5} color="#ffffff" />
            
            <CyberTechArtifact />
          </Canvas>
        </WebGLErrorBoundary>
      ) : (
        <CyberTechFallbackVisual />
      )}
      
      {/* HUD Overlay specific to the right 3D side */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-end gap-1 opacity-60 hidden md:flex">
        <div className="w-16 h-[1px] bg-[#00F0FF]" />
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#00F0FF] uppercase">
          CORE SYS v2.6
        </span>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00F0FF]/50 uppercase">
          SYNC STATE: OPTIMAL
        </span>
      </div>

      {/* Subtle UI Corner Brackets (Right Side) */}
      <div className="absolute top-24 right-8 w-6 h-6 border-t border-r border-[#00F0FF]/30 hidden lg:block" />
      <div className="absolute bottom-32 right-8 w-6 h-6 border-b border-r border-[#00F0FF]/30 hidden lg:block" />

      {/* Gradual negative space blend for sharp UI contrast on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
