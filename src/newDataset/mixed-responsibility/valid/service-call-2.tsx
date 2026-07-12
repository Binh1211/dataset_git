import React, { useState, useEffect } from 'react';
import api from './api-client';

export const ServiceCall2 = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.getUser().then(setUser);
  }, []);

  return <div>{user ? 'User loaded' : 'Loading'}</div>;
};