/**
 * @name wx
 * @author Lester
 * @date 2021-05-21 10:44
 */
import { Toast } from 'antd-mobile';
import { getConfigParam } from 'src/apis';
import { getUrlQueryParam } from 'src/utils/base';

type ConfigFC = (apiList: string[]) => Promise<any>;

/**
 * config接口注入权限验证配置
 * @param apiList
 */
export const wxConfig: ConfigFC = async (apiList: string[]) => {
  const corpId: string = getUrlQueryParam('corpId');
  const param = {
    type: 1,
    url: encodeURIComponent(window.location.href)
  };
  const res: any = await getConfigParam(param);
  if (window.wx && res) {
    const { timestamp, nonceStr, signature } = res;
    return new Promise((resolve, reject) => {
      window.wx.config({
        beta: true,
        debug: false,
        appId: corpId,
        timestamp,
        nonceStr,
        signature,
        jsApiList: [...apiList]
      });
      window.wx.ready(() => {
        resolve(true);
      });
      window.wx.error((err: any) => {
        reject(err);
      });
    });
  }
};

/**
 * agentConfig注入应用的权限
 * @param apiList
 */
export const wxAgentConfig: ConfigFC = async (apiList: string[]) => {
  if (!apiList.includes('getCurExternalContact')) {
    window.sessionStorage.setItem('apis', JSON.stringify(apiList));
  }
  await wxConfig(['agentConfig', ...apiList]);
  const corpId: string = getUrlQueryParam('corpId');
  const agentId: string = getUrlQueryParam('agentId');
  const param = {
    type: 3,
    url: encodeURIComponent(window.location.href)
  };
  const paramRes: any = await getConfigParam(param);
  if (window.wx && window.wx.agentConfig && paramRes) {
    const { timestamp, nonceStr, signature } = paramRes;
    return new Promise((resolve, reject) => {
      window.wx.agentConfig({
        corpid: corpId, // 必填，企业微信的corpid，必须与当前登录的企业一致
        agentid: agentId, // 必填，企业微信的应用id
        timestamp,
        nonceStr,
        signature,
        jsApiList: [...apiList],
        success: (res: any) => {
          console.log('agentConfig success', res);
          resolve(res);
        },
        fail: (res: any) => {
          console.log('agentConfig fail', res);
          reject(res);
        }
      });
    });
  }
};

/**
 * 获取外部联系人userId
 */
export const getExternalUserId = (): Promise<any> => {
  const externalUserId = window.sessionStorage.getItem('externalUserId');
  return new Promise((resolve, reject) => {
    if (externalUserId) {
      resolve(externalUserId);
    } else {
      const apis = window.sessionStorage.getItem('apis') || '["sendChatMessage"]';
      wxAgentConfig(['getCurExternalContact', ...JSON.parse(apis)]).then(() => {
        window.wx.invoke('getCurExternalContact', {}, (res: any) => {
          if (res.err_msg === 'getCurExternalContact:ok') {
            window.sessionStorage.setItem('externalUserId', res.userId);
            resolve(res.userId);
            console.log(res.userId); // 返回当前外部联系人userId
          } else {
            window.sessionStorage.setItem('externalUserId', '');
            reject(res.err_msg);
          }
        });
      });
    }
  });
};
