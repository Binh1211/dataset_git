import React, { useState, useEffect } from 'react';

export const Mixed11 = () => {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let active = true;
    fetch('/api/status')
      .then(res => res.json())
      .then(data => { if (active) setStatus(data.status); });
    return () => { active = false; };
  }, []);

  return <div>Status: {status}</div>;
};