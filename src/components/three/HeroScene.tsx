"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {[2.4, 3.2, 4].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2 + i * 0.2, 0, 0]}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={i === 0 ? "#a78bfa" : i === 1 ? "#8b5cf6" : "#c4b5fd"}
            transparent
            opacity={0.5 - i * 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#8b5cf6" transparent opacity={0.7} />
    </points>
  );
}

function AccentSpheres() {
  return (
    <>
      <Float speed={3} floatIntensity={0.8}>
        <Sphere args={[0.25, 32, 32]} position={[-3.5, 1.5, -1]}>
          <meshStandardMaterial color="#c4b5fd" emissive="#7c3aed" emissiveIntensity={0.4} />
        </Sphere>
      </Float>
      <Float speed={2.5} floatIntensity={1}>
        <Sphere args={[0.18, 32, 32]} position={[3.8, -1.2, 0.5]}>
          <meshStandardMaterial color="#ede9fe" emissive="#a78bfa" emissiveIntensity={0.3} />
        </Sphere>
      </Float>
      <Float speed={1.8} floatIntensity={0.6}>
        <Sphere args={[0.12, 32, 32]} position={[2.5, 2.8, -2]}>
          <meshStandardMaterial color="#ddd6fe" />
        </Sphere>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-10, -5, 5]} intensity={0.6} color="#7c3aed" />
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.6} fade speed={0.5} />
      <FloatingCore />
      <OrbitRings />
      <ParticleField />
      <AccentSpheres />
    </>
  );
}

type HeroSceneProps = {
  contained?: boolean;
};

export default function HeroScene({ contained = false }: HeroSceneProps) {
  if (contained) {
    return (
      <div className="relative w-full h-[min(480px,55vh)] lg:h-[min(560px,72vh)]">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
          className="!absolute inset-0"
        >
          <Scene />
        </Canvas>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
