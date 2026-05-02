interface LightToggleProps {
  onToggle: () => void;
}

const LightToggle = ({ onToggle }: LightToggleProps) => {
  return <button onClick={onToggle}>Toggle Lights</button>;
};

export default LightToggle;
