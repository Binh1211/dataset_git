import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Mixed6 = () => {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.delete('/api/item/1').then(() => setDeleted(true));
  }, []);

  return <div>{deleted ? 'Deleted' : 'Deleting'}</div>;
};