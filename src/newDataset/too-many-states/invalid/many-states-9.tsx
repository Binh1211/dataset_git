import React, { useState } from 'react';

export const ManyStates9 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [value, setValue] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState('label');
  const [placeholder, setPlaceholder] = useState('');
  const [disabled, setDisabled] = useState(false);
  return <div>{count}{step}{min}{max}{value}{isActive}{label}{placeholder}{disabled}</div>;
};