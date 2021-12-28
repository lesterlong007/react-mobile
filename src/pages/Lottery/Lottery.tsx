/**
 * @name Lottery
 * @author Lester
 * @date 2021-12-25 15:39
 */
import React, { useState, useEffect } from 'react'; // MutableRefObject, useRef
import { RouteComponentProps } from 'react-router-dom';
import { Toast } from 'lester-tools';
import classNames from 'classnames';
import LotteryResult from './LotteryResult';
import style from './style.module.less';

interface PrizeItem {
  id: string;
  name: string;
  desc: string;
  img: string;
}

const Lottery: React.FC<RouteComponentProps> = ({ history }) => {
  const [prizeList, setPrizeList] = useState<PrizeItem[]>([]);
  const [turning, setTurning] = useState<boolean>(false);
  const [angle, setAngle] = useState<number>(0);
  const [prizeIndex, setPrizeIndex] = useState<number>(0);
  const [drawing, setDrawing] = useState<boolean>(false);
  const [resultVisible, setResultVisible] = useState<boolean>(true);

  const stepAngle: number = 360 / prizeList.length;
  const transitionTime: number = 2 + Number(((prizeIndex * 3) / prizeList.length).toFixed(3));

  /* const prizeAngle: MutableRefObject<number> = useRef(-1);
  const prizeIndex: MutableRefObject<number> = useRef(-1);
  const turnAngle: MutableRefObject<number> = useRef(0);

  const goTurn = () => {
    setAngle((state) => {
      let timerId = 0;
      let next = state;
      if (next < 360) {
        next += 20;
      } else if (next < 900) {
        next += 10;
      } else {
        next += 1;
      }
      if (prizeIndex.current > -1 && prizeAngle.current === -1) {
        const turnCount = Math.ceil(next / 360);
        prizeAngle.current = stepAngle * prizeIndex.current + (turnCount > 1 ? turnCount : 2) * 360;
        console.log(prizeAngle.current, turnCount);
      }
      if (prizeIndex.current === -1 || next <= prizeAngle.current) {
        timerId = window.requestAnimationFrame(goTurn);
        if (next > 360) {
          console.log('取消');
          window.cancelAnimationFrame(timerId);
        }
      } else {
        console.log('结束');
      }
      turnAngle.current = next;
      return next;
    });
  }; */

  const calcAngle = () => {
    const index = Math.round(Math.random() * prizeList.length);
    setPrizeIndex(index);
    setAngle(0);
    setTurning(true);
    setDrawing(true);

    setTimeout(() => {
      setTurning(false);
      setAngle(360 + stepAngle * index);
      setTimeout(() => {
        setDrawing(false);
        setResultVisible(true);
      }, transitionTime * 1000);
    }, 3000);
  };

  const getSectorPosition = (index: number) => {
    return { transform: ` rotate(${-(90 - stepAngle / 2) + stepAngle * index}deg) skewX(-${90 - stepAngle}deg)` };
  };

  useEffect(() => {
    setPrizeList([
      {
        id: '123',
        name: 'iPhone13 128g',
        desc: '苹果手机',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '456',
        name: '京东100元e卡',
        desc: '京东100元e卡',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '000',
        name: '谢谢参与',
        desc: '谢谢参与',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '789',
        name: '100积分',
        desc: '100积分',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '321',
        name: '黄金VIP月卡',
        desc: '黄金VIP月卡',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '654',
        name: '50元话费券',
        desc: '50元话费券',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '111',
        name: '会员月卡',
        desc: '会员月卡',
        img: require('src/assets/images/mall/star.png')
      },
      {
        id: '987',
        name: '汉堡王皇堡套餐',
        desc: '汉堡王皇堡套餐',
        img: require('src/assets/images/mall/star.png')
      }
    ]);
  }, []);

  return (
    <div className={style.wrap} id="lottery-wrap">
      <div className={style.turnWrap}>
        <div className={style.turntableWrap}>
          <div
            className={style.goLottery}
            onClick={() => {
              const wrapEle = document.getElementById('lottery-wrap');
              if (drawing) {
                Toast.info('抽奖中，请稍后操作！', 2, wrapEle!);
              } else {
                calcAngle();
              }
              // Toast.info('您当前积分不足', 1.5, document.getElementById('lottery-wrap')!);
            }}
          >
            <span className={style.needMall}>每次10积分</span>
          </div>
          <div
            className={style.turnContainer}
            style={{
              transform: `rotate(${angle}deg)`,
              transition: turning ? 'none' : `transform ${transitionTime}s ease-out`
            }}
          >
            <div
              className={classNames(style.turntable, {
                [style.turning]: turning
              })}
            >
              <div className={style.outCircle}>
                {new Array(prizeList.length).fill(0).map((_, index: number) => (
                  <div
                    key={index}
                    style={getSectorPosition(index)}
                    className={classNames(style.sectorItem, {
                      [style.oddColor]: index % 2 === 0,
                      [style.evenColor]: index % 2 === 1
                    })}
                  />
                ))}
                <div className={style.inCircle}>
                  {new Array(prizeList.length).fill(0).map((_, index: number) => (
                    <div
                      key={index}
                      style={getSectorPosition(index)}
                      className={classNames(style.sectorItem, {
                        [style.oddColor]: index % 2 === 0,
                        [style.evenColor]: index % 2 === 1
                      })}
                    />
                  ))}
                </div>
              </div>
              {prizeList.map((item, index) => (
                <div key={item.id} className={style.prizeItem} style={{ transform: `rotate(${stepAngle * index}deg)` }}>
                  <div className={style.prizeName}>{item.name}</div>
                  <img className={style.prizeImg} src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className={style.btnWrap}>
        <button className={style.btn} onClick={() => history.goBack()}>
          返回首页
        </button>
        <button className={style.btn}>我的奖品</button>
      </footer>
      <LotteryResult visible={resultVisible} onClose={() => setResultVisible(false)} />
    </div>
  );
};

export default Lottery;
