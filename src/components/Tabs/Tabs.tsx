/**
 * @name Tabs
 * @author Lester
 * @date 2021-06-10 14:52
 */

import React, { MutableRefObject, useRef, useState, useImperativeHandle } from 'react';
import classNames from 'classnames';
import { screenRate } from 'src/utils/base';
import style from './style.module.less';

interface TabsProps {
  tabs: any[];
  activeIndex?: number;
  onTabClick?: (typeId: string, index: number) => void;
  tabRef?: MutableRefObject<any>;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeIndex, onTabClick, tabRef }) => {
  const [translateX, setTranslateX] = useState<number>(0);

  const wrapRef: MutableRefObject<any> = useRef(null);
  const contentRef: MutableRefObject<any> = useRef(null);

  useImperativeHandle(tabRef, () => ({
    resetTranslate: () => setTranslateX(0)
  }));

  return (
    <div className={style.tabWrap} ref={wrapRef}>
      <div className={style.tabContent}>
        <ul className={style.tabList} ref={contentRef} style={{ transform: `translateX(${-translateX}px)` }}>
          {tabs.map((item: any, index: number) => (
            <li
              className={classNames(style.tabItem, {
                [style.active]: index === activeIndex
              })}
              key={item.id}
              onClick={(event) => {
                onTabClick && onTabClick(item.id, index);
                const scrollDistance = contentRef.current.clientWidth - wrapRef.current.clientWidth;
                if (scrollDistance > 0) {
                  // @ts-ignore
                  const { left } = event.target.getBoundingClientRect();
                  // @ts-ignore
                  const toCenter = left - 70 * screenRate - 150 * screenRate - 1 + event.target.clientWidth / 2;
                  let nextDistance = translateX + toCenter;
                  if (nextDistance > scrollDistance) {
                    nextDistance = scrollDistance;
                  } else if (nextDistance < 0) {
                    nextDistance = 0;
                  }
                  setTranslateX(nextDistance);
                }
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
