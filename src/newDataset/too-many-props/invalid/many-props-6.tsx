import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  subTitle: string;
  children: ReactNode;
  headerColor: string;
  bodyColor: string;
  footerColor: string;
  padding: number;
  margin: number;
  width: string;
  height: string;
}

const ManyProps6 = memo(({ title, subTitle, children, headerColor, bodyColor, footerColor, padding, margin, width, height }: Props) => {
  return (
    <div style={{ padding, margin, width, height }}>
      <header style={{ color: headerColor }}>{title}</header>
      <main style={{ color: bodyColor }}>{subTitle}</main>
      <footer style={{ color: footerColor }}>{children}</footer>
    </div>
  );
});
export default ManyProps6;

export const Usage6 = () => (
  <ManyProps6
    title="Header"
    subTitle="Sub"
    children={<span>Child</span>}
    headerColor="red"
    bodyColor="blue"
    footerColor="green"
    padding={10}
    margin={5}
    width="100px"
    height="200px"
  />
);