import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Box from './box';

const TestCanvas = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} />
        <camera position={[0, 0, 5]} />
        <ambientLight position={[0, 0, 10]} />
        <Box position={[0, 0, 0]} />

        <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TestCanvas;
