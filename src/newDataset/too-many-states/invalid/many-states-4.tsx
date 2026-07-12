import React, { useState } from 'react';

export const ManyStates4 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [c, setC] = useState(2);
  const [d, setD] = useState(3);
  const [e, setE] = useState(4);
  const [f, setF] = useState(5);
  const [g, setG] = useState(6);
  const [h, setH] = useState(7);
  const [i, setI] = useState(8);
  const increment = () => {
    setA(x => x + 1);
    setB(x => x + 1);
    setC(x => x + 1);
  };
  return <div>{a}{b}{c}{d}{e}{f}{g}{h}{i}</div>;
};