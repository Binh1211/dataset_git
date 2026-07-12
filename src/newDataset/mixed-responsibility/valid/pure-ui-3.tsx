import React from 'react';

interface Props { name: string; }
export const PureUI3 = ({ name }: Props) => {
  return <div>Welcome {name}</div>;
};