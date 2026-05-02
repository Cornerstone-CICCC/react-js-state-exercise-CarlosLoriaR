interface ClickCounterProps {
  onIncrement: () => void;
}

const ClickCounter = ({ onIncrement }: ClickCounterProps) => {
  return <button onClick={onIncrement}>Click Counter</button>;
};

export default ClickCounter;
