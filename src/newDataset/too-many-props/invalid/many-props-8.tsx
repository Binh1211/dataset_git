import React, { Children } from 'react';
import type { ReactNode } from 'react';

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

export const Usage8 = () => (
  <ManyProps8
    children={<div>Child</div>}
    flex={true}
    direction="row"
    wrap={false}
    gap={10}
    align="center"
    justify="space-between"
    padding={20}
    margin={10}
    bgColor="#f0f0f0"
  />
);