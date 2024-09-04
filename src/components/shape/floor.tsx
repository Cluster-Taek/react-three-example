import { MeshProps } from '@react-three/fiber';

const Floor = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial opacity={0.15} />
    </mesh>
  );
};

export default Floor;
