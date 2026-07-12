import React, { useState } from 'react';

export const ManyStates1 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState('');
  const [c, setC] = useState(false);
  const [d, setD] = useState<number[]>([]);
  const [e, setE] = useState<{ name: string }>({ name: '' });
  const [f, setF] = useState<null | string>(null);
  return <div>{a}{b}{c}{d}{e.name}{f}</div>;
};