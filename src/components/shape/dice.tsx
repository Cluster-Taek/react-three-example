import { useBox } from '@react-three/cannon';
import { Gltf } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const Dice = (props: MeshProps) => {
  const [ref, api] = useBox<THREE.Mesh>(() => ({
    type: 'Dynamic',
    position: props.position as [number, number, number],
    args: [1, 1, 1],
    mass: 1,
    allowSleep: true,
    sleepTimeLimit: 0.02,
  }));

  const throwDice = () => {
    api.velocity.set(0, 0, 0);
    api.angularVelocity.set(0, 0, 0);
    api.position.set(
      4 + (ref.current?.position.x ?? 0),
      1.5 + (ref.current?.position.y ?? 0),
      -0.5 + (ref.current?.position.z ?? 0)
    );
    ref.current?.rotation.set(4, 1.5, -0.5);
    ref.current?.rotation.set(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random());

    const force = 1 + 2 * Math.random();
    api.applyImpulse([-force, force, 0], [0, 0, 0.2]);
  };

  useEffect(() => {
    ref.current?.addEventListener('sleep', (e) => {
      console.log('sleep', e);
    });
  }, [ref]);

  return (
    <mesh ref={ref} {...props} onClick={throwDice}>
      <Gltf src={'/dice.glb'} scale={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} castShadow={props.castShadow} />
    </mesh>
  );
};

export default Dice;
