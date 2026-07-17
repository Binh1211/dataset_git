import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Mixed4 = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.post('/api/submit', { foo: 'bar' }).then(res => setResult(res.data));
  }, []);

  return <div>{result ? 'Submitted' : 'Submitting'}</div>;
};