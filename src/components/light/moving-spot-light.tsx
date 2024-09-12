import { SpotLight } from '@react-three/drei';
import { SpotLightProps, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface MovingSpotLightProps extends SpotLightProps {
  vec?: THREE.Vector3;
}
const MovingSpotLight = ({ vec = new THREE.Vector3(), ...props }: MovingSpotLightProps) => {
  const light = useRef<THREE.SpotLight>(null);
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    light.current?.target.position.lerp(
      vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0),
      0.1
    );
    light.current?.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      color={props.color as any}
      {...props}
    />
  );
};

export default MovingSpotLight;
