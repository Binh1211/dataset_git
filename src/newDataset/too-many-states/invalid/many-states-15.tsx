import React, { useState } from 'react';

export const ManyStates15 = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<string>('');
  const [c, setC] = useState<boolean>(false);
  const [d, setD] = useState<null>(null);
  const [e, setE] = useState<undefined>(undefined);
  const [f, setF] = useState<number[]>([]);
  const [g, setG] = useState<Record<string, any>>({});
  const [h, setH] = useState<Set<number>>(new Set());
  const [i, setI] = useState<Map<string, number>>(new Map());
  const [j, setJ] = useState<Date>(new Date());
  return <div>{a}{b}{c}{d}{e}{f.length}{Object.keys(g).length}{h.size}{i.size}{j.getTime()}</div>;
};