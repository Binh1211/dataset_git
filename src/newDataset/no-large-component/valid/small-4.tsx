import React from 'react';

export const Small4 = () => {
  const items = [1, 2, 3];
  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
};