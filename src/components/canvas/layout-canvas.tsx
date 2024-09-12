import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PropsWithChildren } from 'react';

const LayoutCanvas = ({ children }: PropsWithChildren) => {
  return (
    <Canvas
      shadows={true}
      dpr={[1, 2]}
      camera={{
        position: [5, 5, 10],
        fov: 45,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
      }}
    >
      <color attach="background" args={['#202020']} />
      {/* <fog attach="fog" args={['#202020', 5, 20]} /> */}
      {/* <gridHelper args={[10, 10]} /> */}
      {/* <axesHelper args={[5]} /> */}
      <OrbitControls minDistance={2} maxDistance={10} maxPolarAngle={Math.PI / 2} target={[0, 1, 0]} />

      {/* <ambientLight intensity={0.3} /> */}

      {children}
    </Canvas>
  );
};

export default LayoutCanvas;
