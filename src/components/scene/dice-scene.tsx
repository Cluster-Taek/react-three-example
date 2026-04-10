import { useDice } from '../../hooks/useDice';
import Dice from '../shape/dice';
import Floor from '../shape/floor';

const DiceScene = () => {
  const { ref, throwDice } = useDice();

  return (
    <>
      <pointLight intensity={1000} distance={1000} castShadow={true} position={[0, 10, 0]} />
      <Dice ref={ref} scale={[1, 1, 1]} position={[0, 5, 0]} castShadow={true} onClick={throwDice} />
      <Floor receiveShadow={true} />
    </>
  );
};

export default DiceScene;
