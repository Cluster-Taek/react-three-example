import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface IBoxProps extends MeshProps {}

const Box = (props: IBoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={THREE.Color.NAMES.blanchedalmond} />
    </mesh>
  );
};

export default Box;
