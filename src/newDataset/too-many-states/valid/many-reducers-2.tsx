import React, { useReducer } from 'react';

const reducer = (state: any, action: any) => state;

export const ManyReducers2 = () => {
  const [s1, d1] = useReducer(reducer, { name: '' });
  const [s2, d2] = useReducer(reducer, [1,2]);
  const [s3, d3] = useReducer(reducer, {});
  const [s4, d4] = useReducer(reducer, 0);
  const [s5, d5] = useReducer(reducer, '');
  const [s6, d6] = useReducer(reducer, false);
  const [s7, d7] = useReducer(reducer, new Date());
  return <div>{s1.name}{s2.length}{s3}{s4}{s5}{s6}{s7.toISOString()}</div>;
};