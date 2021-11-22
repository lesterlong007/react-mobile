/**
 * @name DebugNav
 * @author Lester
 * @date 2021-08-28 11:08
 */

import React, { useState } from 'react';
import { Input } from 'src/components';

const DebugNav: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  const areaClick = () => {
    let count = 0;
    let timer: any = null;
    return (e: any) => {
      e.stopPropagation();
      count++;
      if (count > 19) {
        setVisible(true);
        clearTimeout(timer);
        timer = null;
        count = 0;
        return;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        count = 0;
      }, 400);
    };
  };

  return (
    <>
      <div className="debug-area" onClick={areaClick()} />
      {visible && (
        <div className="debug-nav-wrap">
          <div className="debug-content" onClick={(e) => e.stopPropagation()}>
            <Input className="nav-input" value={url} onChange={(val) => setUrl(val)} />
            <div
              className="jump-btn"
              onClick={() => {
                if (url === '芝麻关门') {
                  setVisible(false);
                } else {
                  window.location.href = url;
                }
              }}
            >
              跳转
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DebugNav;
