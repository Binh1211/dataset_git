import React from 'react';

export const Mixed9 = () => {
  const handleClick = () => {
    fetch('/api/click')
      .then(res => res.json())
      .then(console.log);
  };

  return <button onClick={handleClick}>Click</button>;
};