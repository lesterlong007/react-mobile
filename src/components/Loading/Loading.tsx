/**
 * @name Loading
 * @author Lester
 * @date 2021-05-08 14:26
 */

import React from 'react';
import style from './style.module.less';

const Loading: React.FC = () => {
  return (
    <div className={style.wrap}>
      <img className={style.loadingImg} src={require('src/assets/images/loading_2.gif')} alt="" />
    </div>
  );
};

export default Loading;
