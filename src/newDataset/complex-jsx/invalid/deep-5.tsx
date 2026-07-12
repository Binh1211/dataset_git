import React from 'react';

export const Deep5 = ({ children }: { children: React.ReactNode }) => (
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);