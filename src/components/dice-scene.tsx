import { Physics } from '@react-three/cannon';
import * as THREE from 'three';

import DirectionalLight from './light/direction-light';
import Dice from './shape/dice';
import Floor from './shape/floor';

const DiceScene = () => {
  return (
    <>
      <scene>
        <DirectionalLight intensity={10} color={new THREE.Color(0xffffff)} position={[5, 20, 5]} castShadow={true} />

        <Physics
          gravity={[0, -50, 0]}
          defaultContactMaterial={{
            restitution: 0.3,
          }}
        >
          <Dice scale={[1, 1, 1]} position={[0, 0, 0]} castShadow={true} />
          <Floor />
        </Physics>
      </scene>
    </>
  );
};

export default DiceScene;
