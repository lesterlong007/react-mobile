/**
 * @name Video
 * @author Lester
 * @date 2021-12-14 14:04
 */
import React, { useEffect, useState, useRef, useImperativeHandle, MutableRefObject } from 'react';
import classNames from 'classnames';
import { Icon } from 'src/components';
import style from './style.module.less';

interface VideoProps {
  url: string[];
  autoPlay?: boolean;
  fastType?: 0 | 1 | 2; // 快进方式 0-默认（随意）1-已缓冲 2-已播放
  videoEle?: MutableRefObject<any>;
}

interface ProcessInfo {
  width: number;
  startX: number;
}

interface SoundInfo {
  height: number;
  startY: number;
}

interface Rate {
  value: number;
  label: string;
}

const Video: React.FC<VideoProps> = ({ url, autoPlay, fastType = 0, videoEle }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [full, setFull] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [bufferTime, setBufferTime] = useState<number>(0);
  const [playTime, setPlayTime] = useState<number>(0);
  const [startMove, setStartMove] = useState<boolean>(false);
  const [processInfo, setProcessInfo] = useState<ProcessInfo>({ width: 1, startX: 1 });
  const [currentRate, setCurrentRate] = useState<number>(1);
  const [soundStartMove, setSoundStartMove] = useState<boolean>(false);
  const [currentVolume, setCurrentVolume] = useState<number>(1);

  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const wrapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const processRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const soundRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const soundInfo: MutableRefObject<SoundInfo> = useRef({ height: 1, startY: 1 });

  const rates: Rate[] = [
    {
      value: 2,
      label: '2.0x'
    },
    {
      value: 1.5,
      label: '1.5x'
    },
    {
      value: 1.25,
      label: '1.25x'
    },
    {
      value: 1,
      label: '1.0x'
    },
    {
      value: 0.75,
      label: '0.75x'
    }
  ];

  /**
   * 进入全屏
   * @param ele
   */
  const openFullscreen = (ele: HTMLElement) => {
    if (ele.requestFullscreen) {
      ele.requestFullscreen();
      // @ts-ignore
    } else if (ele.mozRequestFullScreen) {
      /* Firefox */
      // @ts-ignore
      ele.mozRequestFullScreen();
      // @ts-ignore
    } else if (ele.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      // @ts-ignore
      ele.webkitRequestFullscreen();
      // @ts-ignore
    } else if (ele.msRequestFullscreen) {
      /* IE/Edge */
      // @ts-ignore
      ele.msRequestFullscreen();
    }
  };

  /**
   * 退出全屏
   */
  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // @ts-ignore
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      // @ts-ignore
      document.mozCancelFullScreen();
      // @ts-ignore
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      // @ts-ignore
      document.webkitExitFullscreen();
      // @ts-ignore
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      // @ts-ignore
      document.msExitFullscreen();
    }
  };

  /**
   * 格式化时间
   * @param seconds
   */
  const formatTime = (seconds: number) => {
    const hour: number = Math.floor(seconds / (60 * 60));
    const minute: number = Math.floor(seconds / 60) % 60;
    const second: number = seconds % 60;
    let timeStr = '';
    if (hour > 0) {
      timeStr += `${hour}:`;
    }
    timeStr += `${minute}:`;
    if (second > 9) {
      timeStr += String(second);
    } else {
      timeStr += `0${second}`;
    }
    return timeStr;
  };

  /**
   * 获取当前播放的时间点和缓冲时间
   */
  const getPlayTime = () => {
    // const video: HTMLVideoElement = document.getElementById('video1') as HTMLVideoElement;
    if (videoRef.current?.played) {
      setPlayTime(videoRef.current?.played.end(0) || 0);
    }
    setBufferTime(videoRef.current?.buffered.end(0) || 0);
    setCurrentTime(videoRef.current?.currentTime || 0);
  };

  /**
   * 获取银两条相关信息
   */
  const getSoundInfo = () => {
    soundInfo.current = {
      height: soundRef.current?.clientHeight || 1,
      startY: (soundRef.current?.getBoundingClientRect().bottom || 1) - 5
    };
  };

  /**
   * 获取进度条相关信息
   */
  const getProcessInfo = () => {
    setProcessInfo({
      width: processRef.current?.clientWidth || 1,
      startX: processRef.current?.getBoundingClientRect().x || 1
    });
  };

  /**
   * 全屏切换
   */
  const fullChange = () => {
    getProcessInfo();
    if (document.fullscreenElement) {
      setFull(true);
    } else {
      setFull(false);
    }
  };

  /**
   * 计算音量值
   * @param y
   */
  const calcSound = (y: number) => {
    const video: HTMLVideoElement = document.getElementById('video1') as HTMLVideoElement;
    const { height, startY } = soundInfo.current;
    let targetSound = ((startY > y ? startY - y : 0) * 1) / height;
    targetSound = targetSound > 1 ? 1 : targetSound;
    video.volume = targetSound;
    setCurrentVolume(targetSound);
    if (targetSound === 0) {
      video.muted = true;
    }
    if (targetSound === 1) {
      video.muted = false;
    }
  };

  /**
   * 计算进度条
   * @param x
   */
  const calcProcess = (x: number) => {
    const video: HTMLVideoElement = document.getElementById('video1') as HTMLVideoElement;
    const { width, startX } = processInfo;
    const targetTime = ((x > startX ? x - startX : 0) * duration) / width;
    if ([0, 1].includes(fastType) || targetTime <= playTime) {
      video.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  /**
   * 暂停
   */
  const onPause = () => {
    setPlaying(false);
    videoRef.current?.pause();
  };

  /**
   * 播放
   */
  const onPlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  useImperativeHandle(videoEle, () => ({
    onPause,
    onPlay
  }));

  useEffect(() => {
    getProcessInfo();
    setPlaying(!!autoPlay);
    document.addEventListener('fullscreenchange', fullChange);
    return () => {
      document.removeEventListener('fullscreenchange', fullChange);
    };
  }, []);

  return (
    <div className={style.wrap}>
      <div style={{ width: 800, marginLeft: 100 }}>
        <div
          className={style.videoWrap}
          ref={wrapRef}
          onMouseLeave={(e) => {
            if (startMove) {
              calcProcess(e.clientX);
            }
            setStartMove(false);
          }}
          onMouseUp={(e) => {
            if (startMove) {
              calcProcess(e.clientX);
            }
            setStartMove(false);
          }}
          onMouseMove={(e) => {
            if (startMove) {
              calcProcess(e.clientX);
            }
          }}
        >
          <video
            ref={videoRef}
            className={style.video}
            id="video1"
            autoPlay={autoPlay}
            controls={false}
            onCanPlay={() => {
              const time = videoRef.current?.duration || 1;
              setDuration(time);
            }}
            onPlay={() => {
              console.log('play');
            }}
            onPlaying={() => {
              console.log('playing');
            }}
            onPause={() => {
              console.log('pause');
            }}
            onSeeking={() => {
              console.log('跳跃开始');
            }}
            onSeeked={() => {
              console.log('跳跃');
            }}
            onTimeUpdate={getPlayTime}
          >
            {url.map((val: string) => (
              <source key={val} src={val} type="video/mp4" />
            ))}
          </video>
          <div
            className={classNames(style.controlWrap, {
              [style.fullScreen]: full
            })}
          >
            <div
              ref={processRef}
              className={style.progressWrap}
              onMouseDown={(e) => {
                setStartMove(true);
                calcProcess(e.clientX);
              }}
            >
              <div style={{ width: `${(currentTime * 100) / duration}%` }} className={style.progressPlay}>
                <span className={style.processDot} />
              </div>
              <div style={{ width: `${(bufferTime * 100) / duration}%` }} className={style.progressBuffer} />
            </div>
            <div className={style.controlContent}>
              <div className={style.left}>
                <div
                  className={style.btnCircle}
                  onClick={() => {
                    if (playing) {
                      onPause();
                    } else {
                      onPlay();
                    }
                  }}
                >
                  <Icon className={style.playIcon} name={playing ? 'zanting' : '24gf-play'} />
                </div>
                <div
                  className={style.btnCircle}
                  onClick={() => {
                    const video: HTMLVideoElement = document.getElementById('video1') as HTMLVideoElement;
                    if (currentVolume === 0) {
                      video.muted = false;
                      video.volume = 1;
                      setCurrentVolume(1);
                    } else {
                      video.muted = true;
                      video.volume = 0;
                      setCurrentVolume(0);
                    }
                  }}
                >
                  <div
                    className={style.soundWrap}
                    onClick={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => {
                      if (soundStartMove) {
                        calcSound(e.clientY);
                      }
                      setSoundStartMove(false);
                    }}
                    onMouseUp={(e) => {
                      if (soundStartMove) {
                        calcSound(e.clientY);
                      }
                      setSoundStartMove(false);
                    }}
                    onMouseMove={(e) => {
                      if (soundStartMove) {
                        calcSound(e.clientY);
                      }
                    }}
                  >
                    <div>{Math.round((currentVolume * 100) / 1)}%</div>
                    <div
                      ref={soundRef}
                      className={style.soundBar}
                      onMouseDown={(e) => {
                        getSoundInfo();
                        setSoundStartMove(true);
                        calcSound(e.clientY);
                        console.log(e);
                      }}
                    >
                      <div style={{ height: `${(currentVolume * 100) / 1}%` }} className={style.soundVal}>
                        <span className={style.soundDot} />
                      </div>
                    </div>
                  </div>
                  <Icon className={style.playIcon} name={currentVolume === 0 ? 'jingyin' : 'shengyin'} />
                </div>
                <div className={style.currentTime}>
                  {formatTime(Math.round(currentTime))}/{formatTime(Math.round(duration))}
                </div>
              </div>
              <div className={style.right}>
                <div className={style.btnCircle}>
                  <ul className={style.rateList}>
                    {rates.map((item) => (
                      <li
                        key={item.value}
                        className={classNames(style.rateItem, {
                          [style.active]: currentRate === item.value
                        })}
                        onClick={(e) => {
                          const video: HTMLVideoElement = document.getElementById('video1') as HTMLVideoElement;
                          video.playbackRate = item.value;
                          setCurrentRate(item.value);
                          e.stopPropagation();
                        }}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                  <span className={style.btnText}>倍速</span>
                </div>
                <div
                  className={style.btnCircle}
                  onClick={() => {
                    if (full) {
                      closeFullscreen();
                    } else {
                      openFullscreen(wrapRef.current!);
                    }
                  }}
                >
                  <Icon className={style.playIcon} name={full ? 'tuichuquanping1' : 'quanping'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
