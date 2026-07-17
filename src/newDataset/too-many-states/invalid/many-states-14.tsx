import React, { useState } from 'react';

export const ManyStates14 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [i, setI] = useState(0);
  const incrementAll = () => {
    setA(v => v + 1);
    setB(v => v + 1);
    setC(v => v + 1);
    setD(v => v + 1);
    setE(v => v + 1);
    setF(v => v + 1);
    setG(v => v + 1);
    setH(v => v + 1);
    setI(v => v + 1);
  };
  return <button onClick={incrementAll}>All</button>;
};