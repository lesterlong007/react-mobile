/**
 * @name ImgPreview
 * @author Lester
 * @date 2021-06-17 10:40
 */

import React from 'react';
import { Modal } from 'antd-mobile';
import style from './style.module.less';

interface ImgPreviewProps {
  url: string;
  visible: boolean;
  onClose: () => void;
}

const ImgPreview: React.FC<ImgPreviewProps> = ({ visible, onClose, url }) => {
  return (
    <>
      {visible && (
        <Modal className={style.previewWrap} visible={visible} onClose={onClose} transparent>
          <div className={style.previewContent} onClick={(e) => e.stopPropagation()}>
            <img className={style.img} src={url} alt="" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImgPreview;
