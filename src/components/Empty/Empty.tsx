/**
 * @name Empty
 * @author Lester
 * @date 2021-06-22 14:01
 */

import React from 'react';
import style from './style.module.less';

interface EmptyProps {
  img?: NodeRequire;
  title?: string;
  desc?: string;
}
const Empty: React.FC<EmptyProps> = ({ img, title, desc }) => {
  return (
    <div className={style.emptyWrap}>
      <img className={style.emptyImg} src={img || require('src/assets/images/empty.png')} alt="" />
      {title && <div className={style.emptyTitle}>{title}</div>}
      <div className={style.emptyText}> {desc || '暂无数据'}</div>
    </div>
  );
};

export default Empty;
