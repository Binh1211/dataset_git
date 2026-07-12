import React, { useState } from 'react';

function reducer(state: any, action: any) { return state; }
export const ManyStates13 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  // không dùng useReducer
  return <div>{a}{b}{c}{d}{e}{f}{g}{h}</div>;
};