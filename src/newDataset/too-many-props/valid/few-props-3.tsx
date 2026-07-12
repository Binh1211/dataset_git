import React from 'react';

interface Props {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const FewProps3 = ({ id, name, value, onChange, placeholder }: Props) => {
  return <input id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} />;
};