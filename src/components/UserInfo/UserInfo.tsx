/**
 * @name UserInfo
 * @author Lester
 * @date 2021-10-13 14:20
 */

import React, { useContext, useEffect } from 'react';
import { queryUserInfo } from 'src/apis';
import { Context } from 'src/store';
import { getExternalUserId } from 'src/utils/wx';
import { queryExternalInfo } from 'src/apis/collect';
const UserInfo: React.FC = () => {
  const { setUserInfo, setExternalInfo } = useContext(Context);

  let count = 0;
  let userCount = 0;
  let clientCount = 0;

  const reportPage = () => {
    window.$sensors.track('page_view', {
      page_url: window.location.href,
      page_name: '主动上报页面'
    });
  };

  /**
   * 获取外部联系人信息
   * @param externalUserId
   */
  const getExternalInfo = async (externalUserId: string) => {
    const res: any = await queryExternalInfo({ externalUserId });
    clientCount++;
    if (res) {
      setExternalInfo(res);
    } else if (clientCount < 4) {
      getExternalInfo(externalUserId);
    }
  };

  const getExternalId = async () => {
    const externalUserId = await getExternalUserId();
    window.$sensors.registerPage({
      external_user_id: externalUserId // 补充公共属性 外部联系人id
    });
    if (count === 1) {
      reportPage();
    }
    count++;
    getExternalInfo(externalUserId);
  };

  const getUserInfo = async () => {
    const res = await queryUserInfo();
    userCount++;
    if (res) {
      setUserInfo(res);
      window.localStorage.setItem('staffId', res.staffId);
      window.$sensors.registerPage({
        agent_id: res.staffId, // 补充公共属性 座席id
        corp_id: res.corpId,
        corp_name: res.corpName
      });
      window.$sensors.login(res.staffId);
      window.$sensors.setProfile({
        agent_name: res.name || '',
        corp_id: res.corpId,
        corp_name: res.corpName
      });
      if (count === 1) {
        reportPage();
      }
      count++;
    } else if (userCount < 4) {
      getUserInfo();
    }
  };

  useEffect(() => {
    getUserInfo();
    getExternalId();
  }, []);

  return null;
};

export default UserInfo;
