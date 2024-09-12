import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

const Floor = () => {
  const position: [number, number, number] = [0, -2, 0];
  const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5);
  const [ref] = usePlane<THREE.Mesh>(() => ({
    type: 'Static',
    position: position,
    quaternion: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
  }));

  return (
    <mesh ref={ref} receiveShadow={true} position={position} quaternion={quaternion}>
      <planeGeometry args={[100, 100]} />
      <meshLambertMaterial color={0x303030} />
      {/* <shadowMaterial opacity={0.15} /> */}
    </mesh>
  );
};

export default Floor;
