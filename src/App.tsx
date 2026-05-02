import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const handleToggleLights = () => {
    setIsLightsOn(!isLightsOn);
  };

  const handleGenerateLotto = () => {
    const numbers = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 50) + 1
    );
    setLottoNumbers(numbers);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onToggle={handleToggleLights} />
      <div
        style={{
          backgroundColor: isLightsOn ? 'white' : 'black',
          color: isLightsOn ? 'black' : 'white',
          padding: '20px',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        Lights are {isLightsOn ? 'ON' : 'OFF'}
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerate={handleGenerateLotto} />
      <div className="output">
        {lottoNumbers.length > 0 ? lottoNumbers.join(', ') : 'No numbers generated yet'}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter onIncrement={handleIncrement} />
      <div className="output">Count: {count}</div>
    </div>
  );
};

export default App;
