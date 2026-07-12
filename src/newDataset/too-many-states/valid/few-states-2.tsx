import React, { useState } from 'react';

export const FewStates2 = () => {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  return <div>{text}{checked}</div>;
};