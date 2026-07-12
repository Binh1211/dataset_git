import React from 'react';

export const PureUI4 = () => {
  const items = ['a', 'b', 'c'];
  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
};