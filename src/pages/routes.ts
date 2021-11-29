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
  {
    path: '/canvas',
    component: lazy(() => import('src/pages/Canvas/Canvas'))
  }
];

export const cacheRoutes: CacheRouteProps[] = [];
