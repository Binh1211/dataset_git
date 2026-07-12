import React, { useState } from 'react';

export const Small3 = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
};