/**
 * @name BackBtn
 * @author Lester
 * @date 2021-06-23 16:29
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { isMobile } from 'src/utils/base';
import style from './style.module.less';

interface BackBtnProps {
  back?: () => void;
  className?: string;
  customize?: boolean;
  isRefresh?: boolean;
}

const BackBtn: React.FC<BackBtnProps> = ({ back, className, customize, isRefresh }) => {
  const history = useHistory();

  return (
    <div
      className={classNames(style.backBtn, className)}
      onClick={() => {
        if (customize) {
          back && back();
        } else {
          if (isMobile() || isRefresh) {
            if (back) {
              back();
              return false;
            }
            window.location.reload();
          } else {
            history.goBack();
          }
        }
      }}
    >
      {(isMobile() || isRefresh) && !customize ? '刷新' : '返回'}
    </div>
  );
};

export default BackBtn;
