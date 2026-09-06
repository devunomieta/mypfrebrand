'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Center,
  Float,
  Text3D,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import * as THREE from 'three';

const FONT_URL = '/fonts/helvetiker_bold.typeface.json';

function Monogram() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    // Ease the group toward a pointer-driven tilt.
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      x * 0.5,
      3,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -y * 0.35,
      3,
      delta,
    );
    if (shell.current) shell.current.rotation.z += delta * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
        <Center>
          <Text3D
            font={FONT_URL}
            size={2.6}
            height={0.72}
            bevelEnabled
            bevelThickness={0.09}
            bevelSize={0.045}
            bevelSegments={6}
            curveSegments={12}
            letterSpacing={-0.08}
          >
            JU
            <MeshTransmissionMaterial
              samples={6}
              thickness={0.9}
              roughness={0.08}
              transmission={1}
              ior={1.42}
              chromaticAberration={0.06}
              anisotropy={0.2}
              distortion={0.2}
              distortionScale={0.3}
              temporalDistortion={0.1}
              color="#eef0ff"
              attenuationColor="#ffc857"
              attenuationDistance={2.4}
            />
          </Text3D>
        </Center>

        {/* Wireframe shell that orbits the letters */}
        <mesh ref={shell} scale={3.35}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial wireframe color="#3a3f6b" transparent opacity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles({ count = 90 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        r: 4.2 + Math.random() * 3.5,
        theta: Math.random() * Math.PI * 2,
        phi: Math.acos(2 * Math.random() - 1),
        speed: 0.05 + Math.random() * 0.12,
        s: 0.015 + Math.random() * 0.04,
      })),
    [count],
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((p, i) => {
      const theta = p.theta + t * p.speed;
      dummy.position.set(
        p.r * Math.sin(p.phi) * Math.cos(theta),
        p.r * Math.cos(p.phi) * 0.6,
        p.r * Math.sin(p.phi) * Math.sin(theta),
      );
      dummy.scale.setScalar(p.s);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined as any, undefined as any, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffc857" />
    </instancedMesh>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state, delta) => {
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      state.pointer.x * 1.4,
      2,
      delta,
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      1 + state.pointer.y * 0.8,
      2,
      delta,
    );
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1, 9], fov: 42 }}
      onCreated={({ gl }) => gl.setClearColor('#08090f', 0)}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} />
      <pointLight position={[-6, -2, -4]} intensity={40} color="#ff5a5f" />
      <pointLight position={[6, 3, 6]} intensity={30} color="#6c6cff" />

      <Monogram />
      <Particles />
      <Rig />

      <Environment resolution={128}>
        <group rotation={[0, 0, 1]}>
          <Lightformer intensity={2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer
            intensity={2.4}
            color="#ffc857"
            position={[-5, 1, -1]}
            scale={[4, 8, 1]}
          />
          <Lightformer
            intensity={2.4}
            color="#6c6cff"
            position={[5, -1, -1]}
            scale={[4, 8, 1]}
          />
        </group>
      </Environment>
    </Canvas>
  );
}
