/**
 * @name NoPermission
 * @author Lester
 * @date 2021-09-27 15:23
 */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import style from './style.module.less';

const NoPermission: React.FC<RouteComponentProps> = ({ location }) => {
  const { errCode }: any = location.state || {};

  return (
    <div className={style.wrap}>
      {errCode === 90004
        ? (
        <>
          <img className={style.img} src={require('src/assets/images/permission/expired.png')} alt="" />
          <div className={style.text}>企业账号已过期，请联系年高管理员进行续期</div>
        </>
          )
        : (
        <>
          <img className={style.img} src={require('src/assets/images/permission/no_permission.png')} alt="" />
          <div className={style.text}>账号暂无使用权限，请联系年高管理员激活</div>
        </>
          )}
    </div>
  );
};

export default NoPermission;
