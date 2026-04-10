import { RapierRigidBody } from '@react-three/rapier';
import { useCallback, useRef } from 'react';
import * as THREE from 'three';

export const useDice = () => {
  const ref = useRef<RapierRigidBody>(null);

  const throwDice = useCallback(() => {
    if (!ref.current) return;

    ref.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    ref.current.setTranslation({ x: 4, y: 5, z: -0.5 }, true);

    const q = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(2 * Math.PI * Math.random(), 0, 2 * Math.PI * Math.random())
    );
    ref.current.setRotation({ x: q.x, y: q.y, z: q.z, w: q.w }, true);

    const force = 1 + 2 * Math.random();
    ref.current.applyImpulse({ x: -force, y: force, z: 0 }, true);
  }, []);

  return { ref, throwDice };
};
