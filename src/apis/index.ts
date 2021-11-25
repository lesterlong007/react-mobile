/**
 * @name index
 * @author Lester
 * @date 2021-05-20 10:13
 */

import http from 'src/utils/http';

type HttpFunction = (param: Object) => Promise<any>;

/**
 * 微信授权登录
 * @param param
 */
export const loginAuth: HttpFunction = (param: Object) => {
  return http.post('/tenacity-webapp/api/user/authorize', param);
};

/**
 * 获取用户信息
 */
export const queryUserInfo: () => Promise<any> = () => {
  return http.post('/tenacity-webapp/api/station/getcard', {});
};

/**
 * 获取config权限注入参数
 * @param param
 */
export const getConfigParam: HttpFunction = (param: Object) => {
  return http.post('/tenacity-webapp/api/user/config', param);
};

/**
 * 根据手机号获取识别码
 * @param param
 */
export const getPhoneIdentifier: HttpFunction = (param: Object) => {
  return http.get('/tenacity-web/api/wechat/get_mobile_hashcode', param);
};

/**
 * 数据埋点上报
 * @param param
 */
export const report: HttpFunction = (param: Object) => {
  return http.post('/tenacity-webapp/api/data/report', {
    ...param
  });
};
