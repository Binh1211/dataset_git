import React from 'react';

export const InlineChildren1 = () => {
  return (
    <div>
      {() => <span>1</span>}
      {() => <span>2</span>}
      {() => <span>3</span>}
      {() => <span>4</span>}
    </div>
  );
};