import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

const Wall = () => {
  const position: [number, number, number] = [0, 0, 0];
  const [ref] = usePlane<THREE.Mesh>(() => ({
    type: 'Static',
    position: position,
  }));

  return (
    <mesh ref={ref} receiveShadow={true} position={position}>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial opacity={0.15} />
    </mesh>
  );
};

export default Wall;
