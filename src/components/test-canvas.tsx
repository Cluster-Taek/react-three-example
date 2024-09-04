import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import Dice from './shape/dice';
import Floor from './shape/floor';

const TestCanvas = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{
          position: [0, 2.4, 21],
          fov: 45,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 100,
        }}
        shadows={true}
      >
        <gridHelper args={[10, 10]} />
        <axesHelper args={[5]} />
        <OrbitControls />

        <Dice scale={[1, 1, 1]} position={[0, 0, 0]} castShadow={true} />
        <Dice scale={[1, 1, 1]} position={[-3, 0, -2]} rotation={[0, 10, 0]} castShadow={true} />

        <ambientLight intensity={10} color={new THREE.Color(0xffffff)} />
        <directionalLight intensity={10} color={new THREE.Color(0xffffff)} position={[5, 20, 5]} castShadow={true} />
        <Floor
          receiveShadow={true}
          position={[0, 0, 0]}
          quaternion={new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5)}
        />
      </Canvas>
    </div>
  );
};

export default TestCanvas;
