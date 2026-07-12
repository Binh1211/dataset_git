import React, { ReactNode, Children } from 'react';

interface Props {
  children: ReactNode;
  flex: boolean;
  direction: 'row' | 'column';
  wrap: boolean;
  gap: number;
  align: 'start' | 'center' | 'end';
  justify: 'start' | 'center' | 'end' | 'space-between';
  padding: number;
  margin: number;
  bgColor: string;
}

export const ManyProps8 = ({ children, flex, direction, wrap, gap, align, justify, padding, margin, bgColor }: Props) => {
  const count = Children.count(children);
  return <div style={{ display: flex ? 'flex' : 'block', flexDirection: direction, flexWrap: wrap ? 'wrap' : 'nowrap', gap, alignItems: align, justifyContent: justify, padding, margin, backgroundColor: bgColor }}>{children}</div>;
};