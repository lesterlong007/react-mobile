/**
 * @name base
 * @author Lester
 * @date 2021-05-29 17:29
 */
import { getQueryParam } from 'lester-tools';

/**
 * 获取指定Url参数
 * @param key
 */
export const getUrlQueryParam: (key: string) => string = (key: string) => {
  const queryParam: any = JSON.parse(window.localStorage.getItem('queryParam') || '{}');
  return getQueryParam(key) || queryParam[key];
};

/**
 * 判断浏览器环境 1-企业微信 2-微信
 */
export const getEnv: () => number = () => {
  const ua: string = window.navigator.userAgent.toLowerCase();
  let env = 0;
  if (ua.match(/MicroMessenger/i) && ua.match(/wxwork/i)) {
    env = 1;
  } else if (ua.match(/micromessenger/i)) {
    env = 2;
  }
  return env;
};

/**
 * 获取随机字符串
 */
export const getRandomStr: () => string = () => {
  return Math.random().toString(36).slice(2);
};

/**
 * 是否是移动端
 */
export const isMobile: () => boolean = () => /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);

/**
 * 获取cookie
 * @param key
 */
export const getCookie: (key: string) => string = (key: string) => {
  if (!document.cookie || !window.navigator.cookieEnabled) {
    return '';
  }
  const regExe = new RegExp(`${key}=([\\w]+)`);
  const res = document.cookie.match(regExe) || [];
  return res[1];
};

/**
 * 匹配字符串中的换行符
 * @param str string
 * @return string
 */
export const replaceEnter = (str: string): string => {
  // \n 匹配一个换行符, \r 匹配一个回车符
  return str.replace(/\n|\r/g, '<br/>');
};

/**
 * 屏幕大小比例
 */
export const screenRate = (document.body.clientWidth || document.body.clientWidth || window.innerWidth || 360) / 360;

/**
 * 防抖
 * 较短时间间隔内只执行一次
 */
export const debounce = (fn: { apply: (arg0: any, arg1: any) => void }, t: number): Function => {
  let timeId: any = null;
  const delay = t || 500;
  return function (this: any, ...args: any) {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      timeId = null;
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * 图片懒加载
 */
export const lazyLoadImg = (): void => {
  const observer = new IntersectionObserver((changes) => {
    changes.forEach((element) => {
      // @ts-ignore
      if (element.isIntersecting && element.target.dataset.src) {
        // @ts-ignore
        element.target.src = element.target.dataset.src;
      }
    });
  });

  const imgEleList = Array.from(document.getElementsByTagName('img'));
  imgEleList
    .filter((item) => !item.getAttribute('src'))
    .forEach((item) => {
      observer.observe(item);
    });
};

/**
 * 判断浏览器是否支持IntersectionObserver
 */
export const supportLazy = 'IntersectionObserver' in window;
