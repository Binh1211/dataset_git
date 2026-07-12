import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
  disabled: boolean;
}

export const FewProps2 = ({ title, onClick, disabled }: Props) => {
  return <button onClick={onClick} disabled={disabled}>{title}</button>;
};