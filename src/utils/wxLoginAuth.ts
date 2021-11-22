/**
 * @name wxLoginAuth
 * @author Lester
 * @date 2021-06-07 13:41
 */

import qs from 'qs';
import { getQueryParam } from 'lester-tools';
import { getUrlQueryParam } from './base';

/**
 * 微信登录授权
 */
const wxLoginAuth: () => void = () => {
  // return;
  const { origin, pathname } = window.location;
  const corpId: string = getUrlQueryParam('corpId');
  const agentId: string = getUrlQueryParam('agentId');
  const time: number = Date.now();
  let queryParam: any = getQueryParam();
  // 跳转授权前先删除code参数 更新time时间戳参数
  // 微信浏览器上ios上不支持零宽断言
  // let searchStr = search.replace(/((?<=\?)|&)(code|time)+=[\w]*((?=&)|$)/g, '');
  if (queryParam.code) {
    delete queryParam.code;
  }
  queryParam = {
    ...queryParam,
    time
  };
  const redirectUrl = `${origin}${pathname}?${qs.stringify(queryParam)}`;
  const wxParam = {
    appid: corpId,
    redirect_uri: encodeURIComponent(redirectUrl),
    response_type: 'code',
    scope: 'snsapi_userinfo',
    agentid: agentId
  };
  const wxUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?${qs.stringify(wxParam, {
    encode: false
  })}#wechat_redirect`;
  window.location.replace(wxUrl);
};

export default wxLoginAuth;
