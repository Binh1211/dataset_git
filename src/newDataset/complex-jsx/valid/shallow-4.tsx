import React from 'react';

interface Props { name: string; }
export const Shallow4 = ({ name }: Props) => (
  <div>
    <div>
      <div>
        <div>{name}</div>
      </div>
    </div>
  </div>
);