/**
 * @name TagEmpty
 * @author Lester
 * @date 2021-07-05 18:37
 */

import React from 'react';
import classNames from 'classnames';
import style from './style.module.less';

interface TagEmptyProps {
  type: 'tag' | 'service' | 'portrait' | 'movement';
  className?: string;
}

const TagEmpty: React.FC<TagEmptyProps> = ({ type, className }) => {
  const typeToData: any = {
    tag: {
      imgUrl: require('src/assets/images/tag.png'),
      mainText: '还未添加任何标签',
      deputyText: '快来给你的客户添加点标签吧～'
    },
    service: {
      imgUrl: require('src/assets/images/service.png'),
      mainText: '暂无服务建议',
      deputyText: '该客户无任何标签，去给客户添加标签吧！'
    },
    portrait: {
      imgUrl: require('src/assets/images/portrait.png'),
      mainText: '分析不出该客户画像',
      deputyText: '该客户无任何标签，去给客户添加标签吧！'
    },
    movement: {
      imgUrl: require('src/assets/images/movement.png'),
      mainText: '暂无动态',
      deputyText: '给你的客户分享产品和文章吧～'
    }
  };

  return (
    <div className={classNames(style.tagEmptyWrap, className)}>
      <img className={style.emptyImg} src={typeToData[type].imgUrl} alt="" />
      <div className={style.mainText}>{typeToData[type].mainText}</div>
      <div className={style.deputyTex}>{typeToData[type].deputyText}</div>
    </div>
  );
};

export default TagEmpty;
