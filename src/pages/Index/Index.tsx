/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useEffect, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { setTitle } from 'lester-tools';
import { Icon, ScrollList } from 'src/components';
import { Context } from 'src/store';
import { getRandomStr } from 'src/utils/base';

import style from './style.module.less';

const Index: React.FC<RouteComponentProps> = ({ history }) => {
  const { userInfo, setUserInfo } = useContext(Context);
  const [list, setList] = useState<any[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

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
    setUserInfo({
      world: 'long',
      more: '123'
    });
  }, []);

  return (
    <div className={style.wrap}>
      <ScrollList onLoad={getData} loaded={loaded} onRefresh={() => console.log('刷新')}>
        首页 {userInfo.name}
        <Icon className={style.icon} name="jiazai" />
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
