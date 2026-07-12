import React, { memo, ReactNode } from 'react';

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