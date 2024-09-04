import { PlaneProps } from '@react-three/cannon';
import * as THREE from 'three';

const Plane = (props: PlaneProps) => {
  return (
    <mesh
      receiveShadow={true}
      position={[0, -7, 0]}
      quaternion={new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5)}
    >
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial opacity={0.15} />
    </mesh>
  );
};

export default Plane;
