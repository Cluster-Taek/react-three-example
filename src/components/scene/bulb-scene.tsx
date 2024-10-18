import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const BulbScene = () => {
  const diffuseMap = useLoader(THREE.TextureLoader, '/texture/hardwood2_diffuse.jpg');
  diffuseMap.wrapS = THREE.RepeatWrapping;
  diffuseMap.wrapT = THREE.RepeatWrapping;
  diffuseMap.anisotropy = 4;
  diffuseMap.repeat.set(10, 24);
  diffuseMap.colorSpace = THREE.SRGBColorSpace;

  const bumpMap = useLoader(THREE.TextureLoader, '/texture/hardwood2_bump.jpg');
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.anisotropy = 4;
  bumpMap.repeat.set(10, 24);

  const roughnessMap = useLoader(THREE.TextureLoader, '/texture/hardwood2_roughness.jpg');
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.anisotropy = 4;
  roughnessMap.repeat.set(10, 24);

  return (
    <scene>
      <mesh>
        <sphereGeometry args={[0.02, 16, 8]} />
        <meshStandardMaterial emissive={0xffffee} emissiveIntensity={1} color={0x000000} />
      </mesh>

      <pointLight color={0xffee88} intensity={1} distance={100} decay={2} position={[0, 2, 0]} castShadow />
      <hemisphereLight color={0xddeeff} groundColor={0x0f0e0d} intensity={0.02} />

      <mesh receiveShadow rotation={[Math.PI / -2.0, 0, 0]}>
        <meshStandardMaterial
          roughness={0.8}
          color="0xffffff"
          metalness={0.2}
          bumpScale={1}
          map={diffuseMap}
          bumpMap={bumpMap}
          roughnessMap={roughnessMap}
        />
        <planeGeometry args={[20, 20]} />
      </mesh>
    </scene>
  );
};

export default BulbScene;
