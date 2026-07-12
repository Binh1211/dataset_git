import React from 'react';

const manyProps = {
  a: 1, b: 2, c: 3, d: 4, e: 5,
  f: 6, g: 7, h: 8, i: 9, j: 10
};

export const SpreadProps1 = () => {
  return <ChildComponent {...manyProps} />;
};

const ChildComponent = (props: any) => {
  return <div>{props.a}</div>;
};