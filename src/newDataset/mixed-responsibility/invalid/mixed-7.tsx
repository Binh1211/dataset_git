import React, { useState, useEffect } from 'react';

export const Mixed7 = () => {
  const [items, setItems] = useState([]);
  const id = 123;

  useEffect(() => {
    fetch(`/api/items?id=${id}`)
      .then(res => res.json())
      .then(setItems);
  }, []);

  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
};