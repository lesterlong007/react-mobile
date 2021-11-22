/**
 * @name index
 * @author Lester
 * @date 2021-05-10 19:56
 */

import React, { createContext, useState, Context as ContextProps } from 'react';

export const Context: ContextProps<any> = createContext({});

const StoreContext: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [momentDetail, setMomentDetail] = useState<any>({});
  const [clientIndex, setClientIndex] = useState<number>(0);
  const [QAIndex, setQAIndex] = useState<number>(0);
  const [QAIndexes, setQAIndexes] = useState<number[]>([0]);
  const [SceneIndex, setSecneIndex] = useState<number>(0);
  const [SceneIndexes, setSecneIndexes] = useState<number[]>([0]);
  const [updatePrevTag, setUpdatePrevTag] = useState<boolean>(false); // 修复bug:修改客户画像的时候,客户详情的对应预测标签也需要更新
  const [externalInfo, setExternalInfo] = useState<any>({});

  return (
    <Context.Provider
      value={{
        userInfo,
        setUserInfo: (state: any) => setUserInfo({ ...userInfo, ...state }),
        momentDetail,
        setMomentDetail,
        clientIndex,
        setClientIndex,
        QAIndex,
        setQAIndex,
        QAIndexes,
        setQAIndexes,
        SceneIndex,
        setSecneIndex,
        SceneIndexes,
        setSecneIndexes,
        updatePrevTag,
        setUpdatePrevTag,
        externalInfo,
        setExternalInfo
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreContext;
