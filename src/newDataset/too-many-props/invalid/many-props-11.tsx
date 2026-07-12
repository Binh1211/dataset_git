import React, { useLayoutEffect, useRef } from 'react';

interface Props {
  width: number;
  height: number;
  color: string;
  bg: string;
  border: string;
  padding: number;
  margin: number;
  shadow: boolean;
  opacity: number;
  transform: string;
  transition: string;
  zIndex: number;
}

export const ManyProps11 = ({ width, height, color, bg, border, padding, margin, shadow, opacity, transform, transition, zIndex }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (divRef.current) {
      divRef.current.style.transform = transform;
    }
  }, [transform]);
  return <div ref={divRef} style={{ width, height, color, backgroundColor: bg, border, padding, margin, boxShadow: shadow ? '0 0 10px rgba(0,0,0,0.5)' : 'none', opacity, transition, zIndex }}>Content</div>;
};