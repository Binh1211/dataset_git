import React from 'react';

export const ManyInline7 = () => {
  return (
    <div
      onClick={() => { console.log('click'); }}
      onDoubleClick={() => { console.log('dbl'); }}
      onContextMenu={() => { console.log('context'); }}
      onWheel={() => { console.log('wheel'); }}
    />
  );
};