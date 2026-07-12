import React from 'react';

interface Props {
  name: string;
  age: number;
}

export const FewProps1 = ({ name, age }: Props) => {
  return <div>{name} is {age} years old</div>;
};