import { DirectionalLightProps } from '@react-three/fiber';

const DirectionalLight = (props: DirectionalLightProps) => {
  return (
    <>
      <directionalLight {...props} />
    </>
  );
};

export default DirectionalLight;
