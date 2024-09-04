import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface IBoxProps extends MeshProps {}

const Circle = (props: IBoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <circleGeometry args={[1, 32]} />
      <meshStandardMaterial color={THREE.Color.NAMES.blanchedalmond} />
    </mesh>
  );
};

export default Circle;
