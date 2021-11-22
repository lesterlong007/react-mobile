/**
 * @name setup 主动执行的代码
 * @author Lester
 * @date 2021-05-08 10:23
 */
import FastClick from 'fastclick';

/**
 * 计算根元素font size
 */
(function (doc: Document, win: Window) {
  const docEl: HTMLElement = doc.documentElement;
  const docBody: HTMLElement = doc.body;
  const resizeEvent: string = 'orientationchange' in window ? 'orientationchange' : 'resize';
  const reCalc = () => {
    const clientWidth: number = docBody.clientWidth || docEl.clientWidth || win.innerWidth || 375;
    const calcFontSize: number = 100 * (clientWidth / 375);
    docEl.style.fontSize = calcFontSize + 'px';
    docEl.style.opacity = '1';
  };
  reCalc();
  if (!document.addEventListener) return;
  win.addEventListener(resizeEvent, reCalc, false);
  doc.addEventListener('DOMContentLoaded', reCalc, false);
})(document, window);


(function (doc: Document, win: Window) {
  doc.title = '\u200E';

  // @ts-ignore 快速点击 解决移动端点击事件延迟300ms和点击穿透的问题
  FastClick.attach(doc.body);

  // 解决ios下输入框点击不唤起软键盘的bug
  doc.body.addEventListener('click', (event: MouseEvent) => {
    const ele: HTMLElement = event.target as HTMLElement;
    const { tagName } = ele;
    if (tagName === 'INPUT' || tagName === 'TEXTAREA' || ele.getAttribute('contenteditable') === 'true') {
      ele.focus();
    }
  });

  // 调试器
  win.onload = () => {
    // const erudaScript = doc.createElement('script');
    // erudaScript.src = '//cdn.jsdelivr.net/npm/eruda';
    // erudaScript.onload = () => {
    //   win.eruda.init();
    // };
    // doc.body.appendChild(erudaScript);
    // const { origin } = win.location;
    // const productionDomains: string[] = ['https://uat.tenacity.com.cn', 'https://www.tenacity.com.cn'];
    // if (process.env.NODE_ENV !== 'development' && !productionDomains.includes(origin)) {
    // import('vconsole').then((VConsole: any) => {
    //   // eslint-disable-next-line new-cap
    //   const vConsole = new VConsole.default();
    //   console.log(vConsole);
    // });
    // 线上调试工具
    /* const vConsole = new VConsole();
      console.log(vConsole);
      let timer2: any = setInterval(() => {
        let consoleDom: any = document.querySelector('#__vconsole');
        if (consoleDom) {
          clearInterval(timer2);
          timer2 = null;
          const { origin } = win.location;
          const productionDomains: string[] = ['https://uat.tenacity.com.cn', 'https://www.tenacity.com.cn'];
          if (!productionDomains.includes(origin)) {
            consoleDom.style.display = 'block';
            consoleDom = null;
          } else {
            consoleDom.style.display = 'none';
            // 点击页面12下后调出调试工具
            let count: any = 0;
            console.log(count);
            let timer: any = null;
            const showVconsole = () => {
              count++;
              if (count >= 13) {
                consoleDom.style.display = 'block';
                consoleDom = null;
                clearTimeout(timer);
                timer = null;
                document.body.removeEventListener('click', showVconsole);
                count = null;
                return;
              }
              clearTimeout(timer);
              timer = setTimeout(() => {
                count = 0;
              }, 400);
            };
            document.body.addEventListener('click', showVconsole);
          }
        }
      }, 1000); */
    // }
  };

  // 错误监控
  /* win.onerror = (msg, url, row, col, error) => {
    console.log(msg);
    console.log(url);
    console.log(row);
    console.log(col);
    console.log(error);
    return false;
  }; */
})(document, window);
