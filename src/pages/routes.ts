/**
 * @name routes
 * @author Lester
 * @date 2021-05-07 09:35
 */

import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { CacheRouteProps } from 'react-router-cache-route';

export const routes: RouteProps[] = [
  {
    path: '/index',
    component: lazy(() => import('src/pages/Index/Index'))
  },
  // 任务助手
  {
    path: '/taskAssistant',
    component: lazy(() => import('src/pages/TaskAssistant/TaskAssistant'))
  }
];

export const cacheRoutes: CacheRouteProps[] = [
  // 营销平台
  {
    path: '/marketingAssistant',
    component: lazy(() => import('src/pages/MarketingAssistant/MarketingAssistant'))
  },
  // 销售宝典
  {
    path: '/salesCollection',
    component: lazy(() => import('src/pages/SalesCollection/SalesCollection'))
  },

  // 客户信息
  {
    path: '/clientInfo',
    component: lazy(() => import('src/pages/ClientInfo/ClientInfo'))
  },
  // 我的收藏
  {
    path: '/myCollection',
    component: lazy(() => import('src/pages/MyCollection/MyCollection'))
  },
  // 播放器 player
  {
    path: '/player',
    component: lazy(() => import('src/pages/Player/Player'))
  },
  {
    path: '/video',
    component: lazy(() => import('src/pages/Player/PlayerVideo'))
  },
  // 文字识别
  {
    path: '/textRecognition',
    component: lazy(() => import('src/pages/TextRecognition/TextRecognition'))
  }
];
