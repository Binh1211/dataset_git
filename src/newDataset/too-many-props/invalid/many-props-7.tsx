import React from 'react';

function useCounter(initial: number, step: number) {
  const [count, setCount] = React.useState(initial);
  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => c - step);
  return { count, increment, decrement };
}

interface Props {
  initial: number;
  step: number;
  min: number;
  max: number;
  label: string;
  color: string;
  size: number;
  fontWeight: string;
  textAlign: React.CSSProperties['textAlign'];
  marginTop: number;
}

export const ManyProps7 = ({ initial, step, min, max, label, color, size, fontWeight, textAlign, marginTop }: Props) => {
  const { count, increment, decrement } = useCounter(initial, step);
  return <div style={{ color, fontSize: size, fontWeight, textAlign, marginTop }}>{label}: {count}</div>;
};

export const Usage7 = () => (
  <ManyProps7
    initial={0}
    step={2}
    min={0}
    max={20}
    label="Count"
    color="red"
    size={16}
    fontWeight="bold"
    textAlign="center"
    marginTop={10}
  />
);