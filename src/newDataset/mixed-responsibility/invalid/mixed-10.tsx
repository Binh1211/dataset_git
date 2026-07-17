import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(url).then(res => setData(res.data));
  }, [url]);
  return data;
}

export const Mixed10 = () => {
  const data = useFetch('/api/stats');
  return <div>{data ? 'Stats loaded' : 'Loading'}</div>;
};