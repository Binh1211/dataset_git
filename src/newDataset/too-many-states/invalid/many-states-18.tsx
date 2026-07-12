import React, { useState } from 'react';

export const ManyStates18 = ({ init = 0 }: { init?: number }) => {
  const [a, setA] = useState(init);
  const [b, setB] = useState(init + 1);
  const [c, setC] = useState(init + 2);
  const [d, setD] = useState(init + 3);
  const [e, setE] = useState(init + 4);
  const [f, setF] = useState(init + 5);
  const [g, setG] = useState(init + 6);
  const [h, setH] = useState(init + 7);
  return <div>{a}{b}{c}{d}{e}{f}{g}{h}</div>;
};