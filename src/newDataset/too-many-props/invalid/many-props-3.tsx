import React, { useReducer } from 'react';

interface Props {
  initialCount: number;
  min: number;
  max: number;
  step: number;
  label: string;
  color: string;
  disabled: boolean;
  onChange: (value: number) => void;
  onReset: () => void;
}

const reducer = (state: number, action: { type: 'inc' | 'dec' | 'reset', payload?: number }) => {
  switch (action.type) {
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    case 'reset': return 0;
    default: return state;
  }
};

export const ManyProps3 = ({ initialCount, min, max, step, label, color, disabled, onChange, onReset }: Props) => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return <div>{label}: {count}</div>;
};