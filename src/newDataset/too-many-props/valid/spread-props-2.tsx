import React from 'react';

const manyProps = {
  alpha: 'a', beta: 'b', gamma: 'c', delta: 'd', epsilon: 'e',
  zeta: 'f', eta: 'g', theta: 'h', iota: 'i', kappa: 'j',
  lambda: 'k', mu: 'l'
};

export const SpreadProps2 = () => {
  return <Child {...manyProps} />;
};

const Child = (p: any) => <span>{p.alpha}</span>;