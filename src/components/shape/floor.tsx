import { MeshProps } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const FLOOR_QUATERNION = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5);

const Floor = (props: MeshProps) => {
  return (
    <RigidBody type="fixed" restitution={0.2}>
      <mesh {...props} quaternion={FLOOR_QUATERNION}>
        <planeGeometry args={[100, 100]} />
        <meshLambertMaterial color={0x303030} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
