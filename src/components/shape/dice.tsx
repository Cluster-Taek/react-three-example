import { Gltf } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';

const Dice = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <Gltf src={'/dice.glb'} scale={[0.5, 0.5, 0.5]} position={[0, -0.5, 0]} castShadow={props.castShadow} />
    </mesh>
  );
};

export default Dice;
