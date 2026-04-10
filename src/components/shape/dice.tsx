import { Gltf } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { forwardRef } from 'react';

const Dice = forwardRef<RapierRigidBody, MeshProps>((props, ref) => {
  return (
    <RigidBody ref={ref} colliders="cuboid" gravityScale={4}>
      <mesh {...props}>
        <Gltf src={'/dice.glb'} scale={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} castShadow={props.castShadow} />
      </mesh>
    </RigidBody>
  );
});

export default Dice;
