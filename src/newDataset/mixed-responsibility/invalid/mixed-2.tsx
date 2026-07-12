import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Mixed2 = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user').then(res => setUser(res.data));
  }, []);

  return <div>{user ? 'User loaded' : 'Loading'}</div>;
};