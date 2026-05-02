import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DataNodes({ radius = 1.9, count = 120 }) {
  const nodes = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      pts.push(new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)));
    }
    return pts;
  }, [count, radius]);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <octahedronGeometry args={[Math.random() * 0.05 + 0.02, 0]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={5} />
        </mesh>
      ))}
      <pointLight color="#00FFFF" intensity={4} distance={6} decay={2} />
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
        color="#081015" 
        transmission={0.96} 
        opacity={1} 
        transparent={true}
        roughness={0.15} 
        metalness={0.5}
        ior={2.2} 
        thickness={2.5} 
        clearcoat={1} 
        clearcoatRoughness={0.1}
        emissive="#008080"
        emissiveIntensity={0.2}
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
             color="#00FFFF" 
             wireframe 
             transparent 
             opacity={0.3} 
             emissive="#00FFFF" 
             emissiveIntensity={0.8} 
          />
        </mesh>
        
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <dodecahedronGeometry args={[2.6, 0]} />
          <meshStandardMaterial 
             color="#00FFFF" 
             wireframe 
             transparent 
             opacity={0.15} 
             emissive="#00FFFF" 
             emissiveIntensity={0.5} 
          />
        </mesh>
      </group>

      {/* Thin Orbital Rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.8, 0.006, 16, 100]} />
          <meshBasicMaterial color="#00FFFF" transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0.4, 0]}>
          <torusGeometry args={[4.4, 0.003, 16, 100]} />
          <meshBasicMaterial color="#00FFFF" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingParticles({ count = 400 }) {
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
        color="#00FFFF"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

function CyberTechArtifact() {
  const { viewport } = useThree();
  const xOffset = Math.min(viewport.width * 0.25, 4.5);
  // Reduce base scale to make it more compact
  const mobileScale = Math.min(viewport.width / 14, 1) * 0.85;

  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  // Smoothly lerp towards a larger scale when hovered
  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetScale = hovered ? mobileScale * 1.15 : mobileScale;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto'; // Reset cursor on unmount
    };
  }, [hovered]);

  return (
    <group 
      position={[xOffset, 0, 0]} 
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <DataNodes />
        <RefractiveGlassCore />
        <ComplexWireframe />
        <FloatingParticles />
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, alpha: true }} 
        camera={{ position: [12, 10, 12], fov: 25 }}
      >
        <ambientLight intensity={0.4} color="#00FFFF" />
        <spotLight position={[10, 15, 10]} intensity={150} color="#00FFFF" penumbra={0.5} distance={50} angle={0.8} />
        <spotLight position={[-15, -10, -15]} intensity={100} color="#00FFFF" penumbra={1} distance={50} />
        <directionalLight position={[6, -2, 10]} intensity={2.5} color="#ffffff" />
        
        <CyberTechArtifact />
      </Canvas>
      
      {/* HUD Overlay specific to the right 3D side */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-end gap-1 opacity-60 hidden md:flex">
        <div className="w-16 h-[1px] bg-[#00FFFF]" />
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#00FFFF] uppercase">
          CORE SYS v2.6
        </span>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00FFFF]/50 uppercase">
          SYNC STATE: OPTIMAL
        </span>
      </div>

      {/* Subtle UI Corner Brackets (Right Side) */}
      <div className="absolute top-24 right-8 w-6 h-6 border-t border-r border-[#00FFFF]/30 hidden lg:block" />
      <div className="absolute bottom-32 right-8 w-6 h-6 border-b border-r border-[#00FFFF]/30 hidden lg:block" />

      {/* Gradual negative space blend for sharp UI contrast on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
