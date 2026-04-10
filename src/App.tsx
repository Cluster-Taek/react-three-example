import LayoutCanvas from './components/canvas/layout-canvas';
import DiceScene from './components/scene/dice-scene';

const App = () => {
  return (
    <div className="w-screen h-screen">
        <LayoutCanvas>
          <DiceScene />
        </LayoutCanvas>
    </div>
  );
};

export default App;
