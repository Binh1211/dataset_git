import React from 'react';

export const InlineChildren2 = () => {
  return (
    <ul>
      {() => <li>A</li>}
      {() => <li>B</li>}
      {() => <li>C</li>}
      {() => <li>D</li>}
    </ul>
  );
};