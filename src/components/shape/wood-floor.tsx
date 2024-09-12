import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const WoodFloor = () => {
  const position: [number, number, number] = [0, 0, 0];
  const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI * 0.5);
  const [ref] = usePlane<THREE.Mesh>(() => ({
    type: 'Static',
    position: position,
    quaternion: [quaternion.x, quaternion.y, quaternion.z, quaternion.w],
  }));

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
    <mesh ref={ref} receiveShadow rotation={[Math.PI / -2.0, 0, 0]}>
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
  );
};

export default WoodFloor;
