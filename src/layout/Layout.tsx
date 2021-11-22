/**
 * @name Layout
 * @author Lester
 * @date 2021-05-07 10:35
 */

import React, { useEffect, useState, Suspense } from 'react';
import { Route, Redirect, withRouter, RouteProps, RouteComponentProps } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { CacheRoute, CacheSwitch, CacheRouteProps } from 'react-router-cache-route';
import { getQueryParam } from 'lester-tools';
import { routes, cacheRoutes } from 'src/pages/routes';
import { loginAuth } from 'src/apis';
import wxLoginAuth from 'src/utils/wxLoginAuth';
import { getUrlQueryParam, getCookie } from 'src/utils/base';
import { Loading, UserInfo } from 'src/components';
import DebugNav from './DebugNav';
import './style.less';

const Routes = () => (
  <Suspense fallback={null}>
    <CacheSwitch>
      {routes.map(({ path, ...props }: RouteProps) => (
        <Route key={`rt${path}`} path={path} {...props} />
      ))}
      {cacheRoutes.map(({ path, ...props }: CacheRouteProps) => (
        <CacheRoute saveScrollPosition className="cache-route" key={`rt${path}`} path={path} {...props} />
      ))}
      <Redirect from="/*" to="/index" />
    </CacheSwitch>
  </Suspense>
);

/* const Routes = withRouter(({ location }) => (
  <TransitionGroup className="transition-wrap">
    <CSSTransition timeout={300} classNames="fade" key={location.pathname}>
      <Suspense fallback={null}>
        <Switch location={location}>
          {routes.map((item: RouteProps) => (
            <Route key={`rt${item.path}`} {...item} exact />
          ))}
          <Redirect from="/!*" to="/index" />
        </Switch>
      </Suspense>
    </CSSTransition>
  </TransitionGroup>
)); */

const Layout: React.FC<RouteComponentProps> = ({ history }) => {
  const [pageVisible, setPageVisible] = useState<boolean>(false);

  /**
   * 加载js-sdk
   */
  /* const loadJsSdk = () => {
    setHasLogin(true);
    const script: any = document.createElement('script');
    script.anonymous = 'anonymous';
    script.src = '//res.wx.qq.com/open/js/jweixin-1.2.0.js';
    script.onload = async () => {
      setPageVisible(true);
    };
    script.onerror = () => {
      console.log('js-sdk加载出错');
    };
    document.head.appendChild(script);
  }; */

  /**
   * 登录授权
   */
  const login = async () => {
    // 兼容页面刷新时 没带企业参数
    const queryParam: any = getQueryParam();
    const corpId: string = getUrlQueryParam('corpId');
    const agentId: string = getUrlQueryParam('agentId');
    if (queryParam.corpId && queryParam.agentId) {
      window.localStorage.setItem('queryParam', JSON.stringify(queryParam));
    }
    const token = getCookie('2bad75be7f8e82b16dfba403b7eaf4a9');
    if (token) {
      setPageVisible(true);
    } else {
      const localCode = window.localStorage.getItem('code');
      const code: string = getQueryParam('code');
      if (code && code !== localCode) {
        const param: any = {
          corpId,
          agentId,
          code
        };
        const res: any = await loginAuth(param);
        window.localStorage.setItem('code', code);
        if (res) {
          if (typeof res === 'number') {
            history.push('/noPermission', {
              errCode: res
            });
          } else {
            setPageVisible(true);
          }
        }
      } else {
        wxLoginAuth();
      }
    }
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <>
      {pageVisible && window.location.pathname !== '/tenacity-webapp-sidebar/marketingAssistant' && <UserInfo />}
      {pageVisible ? <Routes /> : <Loading />}
      <DebugNav />
    </>
  );
};

export default withRouter(Layout);
