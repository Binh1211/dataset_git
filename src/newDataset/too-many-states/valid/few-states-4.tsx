import React, { useState } from 'react';

export const FewStates4 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [c, setC] = useState(2);
  const [d, setD] = useState(3);
  const [e, setE] = useState(4);
  return <div>{a}{b}{c}{d}{e}</div>;
};