import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';

const Floor = (props: MeshProps) => {
  const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5);

  return (
    <mesh {...props} quaternion={quaternion}>
      <planeGeometry args={[100, 100]} />
      <meshLambertMaterial color={0x303030} />
      {/* <shadowMaterial opacity={0.15} /> */}
    </mesh>
  );
};

export default Floor;
