/**
 * @name LotteryResult
 * @author Lester
 * @date 2021-12-28 15:05
 */
import React from 'react';
import { Icon } from 'src/components';
import style from './style.module.less';

interface LotteryResultProps {
  visible: boolean;
  onClose: () => void;
}

const LotteryResult: React.FC<LotteryResultProps> = ({ visible, onClose }) => {
  return (
    <>
      {visible && (
        <div className={style.lotteryResultWrap}>
          <div className={style.content}>
            <Icon className={style.closeIcon} name="guanbi" onClick={onClose} />
            <img className={style.lightImg} src={require('src/assets/images/mall/light.png')} alt="" />
            <div className={style.imgWrap}>
              <div className={style.light} />
              <img className={style.starImg} src={require('src/assets/images/mall/star.png')} alt="" />
            </div>
            <footer className={style.footerWrap}>
              {/* <div className={style.comfortText}>未中奖，谢谢参与</div> */}
              <div className={style.lotteryResName}>恭喜您抽中50元话费券</div>
              <div className={style.lotteryResDesc}>您可以在“我的奖品”中查看奖品</div>
              <button className={style.lotteryResBtn}>查看奖品</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default LotteryResult;
