import { Gltf } from '@react-three/drei';
import { MeshProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Dice = (props: MeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // useFrame((state, delta) => {
  //   meshRef.current.rotation.x += 0.01;
  //   meshRef.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={meshRef} {...props}>
      <Gltf src={'/dice.glb'} castShadow={props.castShadow} />
    </mesh>
  );
};

export default Dice;
