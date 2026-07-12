import React, { useState } from 'react';

interface Props { initial: number; }
export const ManyStates12 = ({ initial }: Props) => {
  const [a, setA] = useState(initial);
  const [b, setB] = useState(initial + 1);
  const [c, setC] = useState(initial + 2);
  const [d, setD] = useState(initial + 3);
  const [e, setE] = useState(initial + 4);
  const [f, setF] = useState(initial + 5);
  const [g, setG] = useState(initial + 6);
  return <div>{a}{b}{c}{d}{e}{f}{g}</div>;
};