import React, { useState, useEffect } from 'react';

export const Mixed1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data ? 'Loaded' : 'Loading'}</div>;
};