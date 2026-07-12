import React, { useState } from 'react';

export const ManyStates8 = () => {
  const [a, setA] = useState<number | null>(null);
  const [b, setB] = useState<{ id: number }>({ id: 0 });
  const [c, setC] = useState<Array<{ name: string }>>([]);
  const [d, setD] = useState<Map<string, number>>(new Map());
  const [e, setE] = useState<Set<number>>(new Set());
  const [f, setF] = useState<Date>(new Date());
  const [g, setG] = useState<[x: number, y: number]>([0, 0]);
  const [h, setH] = useState<{ a: number; b: string }>({ a: 0, b: '' });
  return <div>{a}{b.id}{c.length}{d.size}{e.size}{f.getTime()}{g[0]}{h.a}</div>;
};