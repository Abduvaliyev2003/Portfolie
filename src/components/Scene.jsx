// Three.js 3D Scene Component
// WireframeSphere + FloatingNodes + Mouse Parallax

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── Wireframe Sphere with distortion ────────────────────────
function CyberSphere({ mouse }) {
  const meshRef = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = t * 0.05;
      // Mouse parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        (mouse.current[0] / viewport.width) * 1.5,
        0.04
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        (mouse.current[1] / viewport.height) * 1.0,
        0.04
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        {/* Solid glowing inner core */}
        <sphereGeometry args={[1.35, 64, 64]} />
        <MeshDistortMaterial
          color="#00f5ff"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.08}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh ref={meshRef}>
        {/* Wireframe outer shell */}
        <sphereGeometry args={[1.5, 28, 28]} />
        <meshBasicMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
      {/* Neon hotspot rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.008, 4, 80]} />
        <meshBasicMaterial color="#39ff14" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1.55, 0.006, 4, 80]} />
        <meshBasicMaterial color="#bf00ff" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

// ─── Network node connections ─────────────────────────────────
function NetworkNodes() {
  const pointsRef = useRef();

  const [positions, sizes] = useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 1.8;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = Math.random() * 3 + 1;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} sizes={sizes} stride={3}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}

// ─── Background particle field ─────────────────────────────────
function StarField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

// ─── Main exported Scene ──────────────────────────────────────
export default function Scene({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#bf00ff" intensity={1} />

      <StarField />
      <NetworkNodes />
      <CyberSphere mouse={mouse} />
    </Canvas>
  );
}
