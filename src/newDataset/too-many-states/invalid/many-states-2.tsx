import React, { useState } from 'react';

export const ManyStates2 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  return <div>{count}{text}{isOpen}{items.length}{selected}{error?.message}{loading}</div>;
};