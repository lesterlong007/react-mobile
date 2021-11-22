/**
 * @name Modal
 * @author Lester
 * @date 2021-07-06 13:55
 */
import React from 'react';
import { Modal as AntdModal } from 'antd-mobile';
import { Icon } from 'src/components/index';
import classNames from 'classnames';
import style from './style.module.less';

interface ModalProps {
  visible: boolean;
  title: string;
  tips?: string;
  onClose: () => void;
  okText?: string;
  onOk?: () => void;
  className?: string;
  disabled?: boolean;
  isShowBtn?: boolean; // 定义是否显示取消和确认按钮
  isShowCloseIcon?: boolean; // 定义是否显示×
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    visible,
    onClose,
    onOk,
    children,
    title,
    tips,
    okText,
    className,
    disabled,
    isShowBtn = true,
    isShowCloseIcon = false
  } = props;
  return (
    <AntdModal
      closable={isShowCloseIcon}
      className={classNames(style.modalWrap, className)}
      visible={visible}
      title={
        <div className={style.baseTitle}>
          {title}
          {tips && <span className={style.titleTips}>{tips}</span>}
        </div>
      }
      transparent
      onClose={onClose}
      maskClosable={false}
      footer={[]}
    >
      {children}
      {isShowBtn && (
        <div className={style.footerBtn}>
          <button className={style.cancel} onClick={onClose}>
            取消
          </button>
          <button className={classNames(style.ok, { [style.nook]: disabled })} onClick={onOk} disabled={disabled}>
            确认修改
          </button>
        </div>
      )}
    </AntdModal>
  );
};

export default Modal;
