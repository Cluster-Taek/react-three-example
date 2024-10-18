import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { PropsWithChildren, Suspense } from 'react';

const LayoutCanvas = ({ children }: PropsWithChildren) => {
  return (
    <Canvas
      shadows={true}
      dpr={[1, 2]}
      camera={{
        position: [5, 20, 10],
        fov: 45,
        zoom: 0.5,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
      }}
    >
      {/* <color attach="background" args={['#202020']} /> */}
      {/* <fog attach="fog" args={['#202020', 5, 20]} /> */}
      <gridHelper args={[10, 10]} />
      <axesHelper args={[5]} />
      <OrbitControls minDistance={2} maxDistance={10} maxPolarAngle={Math.PI / 2} target={[0, 1, 0]} />

      <ambientLight intensity={1}/>

      <Suspense>
        <Physics gravity={[0, -9.8, 0]} debug>{children}</Physics>
      </Suspense>
    </Canvas>
  );
};

export default LayoutCanvas;
