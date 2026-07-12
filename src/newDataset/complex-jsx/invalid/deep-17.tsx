import React from 'react';

export const Deep17 = ({ cond }: { cond: boolean }) => (
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      {cond ? <span>True</span> : <span>False</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);