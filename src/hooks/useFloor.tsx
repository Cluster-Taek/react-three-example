import { MeshProps } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';

import Floor from '../components/shape/floor';

export const useFloor = () => {
  const FloorComponent = useMemo(() => {
    return (props: MeshProps) => (
      <RigidBody type="fixed" restitution={0.2}>
        <Floor {...props} />
      </RigidBody>
    );
  }, []);

  return {
    Floor: FloorComponent,
  };
};
