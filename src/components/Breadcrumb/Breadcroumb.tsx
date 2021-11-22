import React from 'react';

import { Icon } from 'src/components';
import style from './style.module.less';
import classNames from 'classnames';

interface BreadCroumbItemPorps {
  children: React.ReactElement;
  onClick: () => void;
}
interface BreadCroumbPorps {
  children: Element[] | React.ReactNode[] | any;
}

export const BreadCroumbItem: React.FC<BreadCroumbItemPorps> = (porps) => {
  return (
    <>
      <div className={classNames(style.title, 'ellipsis')}>
        <span onClick={() => porps.onClick()}>{porps.children}</span>
        <Icon name="common_36_youjiantou_qianhui" className={style.icon}></Icon>
      </div>
    </>
  );
};

const BreadCroumb: React.FC<BreadCroumbPorps> = (porps) => {
  return <div className={classNames(style.wrap, 'flex align-center')}>{porps.children}</div>;
};

export default BreadCroumb;
