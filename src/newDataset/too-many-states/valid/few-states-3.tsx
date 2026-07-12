import React, { useState } from 'react';

export const FewStates3 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [active, setActive] = useState(false);
  return <div>{name}{age}{active}</div>;
};