import React from 'react';

interface Props { title: string; }
export const Deep4 = ({ title }: Props) => (
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>{title}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);