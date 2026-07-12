import React, { useState, useEffect } from 'react';
import { fetchData } from './api-service';

export const ServiceCall1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <div>{data ? 'Data loaded' : 'Loading'}</div>;
};