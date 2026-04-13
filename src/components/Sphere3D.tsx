import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group[]>([]);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
    
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = state.clock.elapsedTime * (0.1 + i * 0.02);
      }
    });
  });

  const ringColors = [
    '#E94E4E', '#F5C842', '#4CAF50', '#2196F3', 
    '#9C27B0', '#00BCD4', '#FF9800', '#E91E63',
    '#3F51B5', '#009688', '#CDDC39', '#FF5722'
  ];

  return (
    <group ref={sphereRef}>
      {ringColors.map((color, i) => {
        const scale = 1 + i * 0.15;
        const rotationX = (i * Math.PI) / 12;
        const rotationY = (i * Math.PI) / 8;
        
        return (
          <group
            key={i}
            ref={(el) => {
              if (el) ringsRef.current[i] = el;
            }}
            rotation={[rotationX, rotationY, 0]}
          >
            <mesh scale={[scale, scale, scale]}>
              <torusGeometry args={[1.5, 0.015, 16, 100]} />
              <meshBasicMaterial color={color} transparent opacity={0.8} />
            </mesh>
          </group>
        );
      })}
      
      {/* Center sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.5 + Math.random() * 0.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 1;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={ringColors[i % ringColors.length]} />
          </mesh>
        );
      })}
    </group>
  );
};

const Sphere3D = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Sphere3D;
