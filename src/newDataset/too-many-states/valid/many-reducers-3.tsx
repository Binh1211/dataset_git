import React, { useReducer } from 'react';

const reducer1 = (s: any, a: any) => s;
const reducer2 = (s: any, a: any) => s;
const reducer3 = (s: any, a: any) => s;

export const ManyReducers3 = () => {
  const [a1, d1] = useReducer(reducer1, {});
  const [a2, d2] = useReducer(reducer1, []);
  const [a3, d3] = useReducer(reducer2, 0);
  const [a4, d4] = useReducer(reducer2, '');
  const [a5, d5] = useReducer(reducer3, false);
  const [a6, d6] = useReducer(reducer3, null);
  return <div>{a1}{a2}{a3}{a4}{a5}{a6}</div>;
};