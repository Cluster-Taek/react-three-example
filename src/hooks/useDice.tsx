import { MeshProps } from '@react-three/fiber';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useCallback, useMemo, useRef, useState } from 'react';

import Dice from '../components/shape/dice';

export const useDice = () => {
  const rigidBody = useRef<RapierRigidBody>(null);
  const [value, setValue] = useState(6);

  const throwDice = useCallback(() => {
    if (!rigidBody.current) {
      return;
    }

    rigidBody.current.setAngvel(
      {
        x: 0,
        y: 0,
        z: 0,
      },
      true
    );

    rigidBody.current.setTranslation(
      {
        x: 4,
        y: 5,
        z: -0.5,
      },
      true
    );

    rigidBody.current.setRotation(
      {
        x: 2 * Math.PI * Math.random(),
        y: 0,
        z: 2 * Math.PI * Math.random(),
        w: 10,
      },
      true
    );

    const force = 1 + 2 * Math.random();
    rigidBody.current.applyImpulse(
      {
        x: -force,
        y: force,
        z: 0,
      },
      true
    );
  }, []);

  const handleSleep = useCallback(() => {
    if (!rigidBody.current) {
      return;
    }

    console.log(rigidBody.current.translation);
  }, []);

  const DiceComponent = useMemo(() => {
    return (props: MeshProps) => (
      <RigidBody ref={rigidBody} colliders="cuboid" gravityScale={4} onSleep={handleSleep}>
        <Dice {...props} />
      </RigidBody>
    );
  }, [handleSleep]);

  return {
    Dice: DiceComponent,
    value,
    throwDice,
  };
};
