interface LottoNumbersProps {
  onGenerate: () => void;
}

const LottoNumbers = ({ onGenerate }: LottoNumbersProps) => {
  return <button onClick={onGenerate}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;
