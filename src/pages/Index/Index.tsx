/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useEffect, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { setTitle } from 'lester-tools';
import { Icon, ScrollList, UserInfo } from 'src/components';
import { Context } from 'src/store';
import { wxAgentConfig } from 'src/utils/wx';
import { getRandomStr } from 'src/utils/base';

import style from './style.module.less';

const Index: React.FC<RouteComponentProps> = ({ history }) => {
  const { userInfo, setUserInfo } = useContext(Context);
  const [list, setList] = useState<any[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const configInit = async () => {
    await wxAgentConfig(['getContext', 'sendChatMessage']);
    window.wx.invoke('getContext', {}, (res: any) => {
      console.log(res);
      if (res.err_msg === 'getContext:ok') {
        console.log(res.entry);
      }
    });
  };

  /**
   * 发送消息
   * @param type
   */
  const sendMessage = (type: string) => {
    if (type === 'text' || type === 'double') {
      window.wx.invoke('sendChatMessage', {
        msgtype: 'text', // 消息类型，必填
        text: {
          content: '你好堞雅' // 文本内容
        }
      });
    }
    if (type === 'news' || type === 'double') {
      window.wx.invoke('sendChatMessage', {
        msgtype: 'news', // 消息类型，必填
        news: {
          link: 'https://baidu.com', // H5消息页面url 必填
          title: '堞雅的链接', // H5消息标题
          desc: '鹅鹅鹅', // H5消息摘要
          // H5消息封面图片URL
          imgUrl: 'https://dev.tenacity.com.cn/tenacity-webapp-pc/images/bg.d6904fdd.jpg'
        }
      });
    }
  };

  const queryList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4, 5].map(() => getRandomStr()));
      }, 2000);
    });
  };

  const getData = async () => {
    const res: any = await queryList();
    console.log('数据', res);
    setList([...list, ...res]);
    if (list.length > 10) {
      setLoaded(true);
    }
    return res;
  };

  useEffect(() => {
    setTitle('首页');
    configInit();
    console.log(userInfo);
    setUserInfo({
      world: 'long',
      more: '123'
    });
  }, []);

  return (
    <div className={style.wrap}>
      <UserInfo />
      <ScrollList onLoad={getData} loaded={loaded} onRefresh={() => console.log('刷新')}>
        首页 {userInfo.name}
        <Icon className={style.icon} name="jiazai" />
        <Button className={style.btn} type="primary" onClick={() => history.push('/marketingAssistant')}>
          前往 用户中心
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/clientInfo')}>
          客户信息
        </Button>
        <Button className={style.btn} type="primary" onClick={() => sendMessage('news')}>
          发送消息
        </Button>
        <Button className={style.btn} type="primary" onClick={() => sendMessage('double')}>
          发送文本和消息
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/salesCollection')}>
          销售宝典
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/taskAssistant')}>
          任务助手
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/myCollection')}>
          我的收藏
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/player')}>
          播放器
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/video')}>
          视频播放
        </Button>
        <Button className={style.btn} type="primary" onClick={() => history.push('/textRecognition')}>
          文字识别
        </Button>
        {list.map((val: string) => (
          <div style={{ padding: '10' }} key={val}>
            {val}
          </div>
        ))}
      </ScrollList>
    </div>
  );
};

export default Index;
