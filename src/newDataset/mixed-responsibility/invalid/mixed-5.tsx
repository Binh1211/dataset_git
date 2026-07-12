import React, { useState, useEffect } from 'react';

export const Mixed5 = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/fail')
      .then(res => {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .catch(err => setError(err.message));
  }, []);

  return <div>{error ? `Error: ${error}` : 'OK'}</div>;
};