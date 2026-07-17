import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const Mixed12 = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    api.get('/config').then(res => setConfig(res.data));
  }, []);

  return <div>{config ? 'Config loaded' : 'Loading'}</div>;
};