import React, { useReducer } from 'react';

const reducer = (state: any, action: any) => state;

export const ManyReducers1 = () => {
  const [a, da] = useReducer(reducer, {});
  const [b, db] = useReducer(reducer, []);
  const [c, dc] = useReducer(reducer, 0);
  const [d, dd] = useReducer(reducer, '');
  const [e, de] = useReducer(reducer, false);
  const [f, df] = useReducer(reducer, null);
  return <div>{a}{b}{c}{d}{e}{f}</div>;
};