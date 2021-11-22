/**
 * @name Drawer
 * @author Lester
 * @date 2021-06-11 16:24
 */

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import style from './style.module.less';

interface DrawerProps {
  index: number;
}

const Drawer: React.FC<DrawerProps> = ({ children, index }) => {
  const [warpWith, setWrapWith] = useState<number>(0);

  const wrapRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    setWrapWith(wrapRef.current.clientWidth);
  }, []);

  return (
    <div className={style.drawerWrap} ref={wrapRef}>
      <div className={style.drawerContent} style={{ transform: `translateX(-${index * warpWith}px)` }}>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
