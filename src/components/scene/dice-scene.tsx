import { useDice } from '../../hooks/useDice';
import { useFloor } from '../../hooks/useFloor';

const DiceScene = () => {
  const { Dice: Dice1, throwDice: throwDice1 } = useDice();

  const { Floor } = useFloor();

  return (
    <>
      <scene>
        <pointLight intensity={1000} distance={1000} castShadow={true} position={[0, 10, 0]} />

        <Dice1 scale={[1, 1, 1]} position={[0, 5, 0]} castShadow={true} onClick={throwDice1} />
        <Floor receiveShadow={true} />
      </scene>
    </>
  );
};

export default DiceScene;
