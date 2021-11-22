/**
 * @name marketingAssistant
 * @author Lester
 * @date 2021-06-24 11:30
 */

import http, { HttpFC, VoidFC } from 'src/utils/http';
/**
 * 查询产品列表
 * @param param
 */
export const queryProductList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/product/list', param);
};

/**
 * 查询产品搜索条件列表-产品分类
 */
export const queryProductCondition: VoidFC = () => {
  return http.post('/tenacity-webapp/api/product/config', { type: [1] });
};

/**
 * 查询海报列表
 * @param param
 */
export const queryPosterList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/poster/list', param);
};

/**
 * 查询海报分类
 */
export const queryPosterCategory: VoidFC = () => {
  return http.post('/tenacity-webapp/api/poster/category');
};

/**
 * 查询活动列表
 * @param param
 */
export const queryActivityList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/activity/list', param);
};

/**
 * 查询文章列表
 * @param param
 */
export const queryArticleList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/article/list', param);
};

/**
 * 查询文章分类
 */
export const queryArticleCategory: VoidFC = () => {
  return http.post('/tenacity-webapp/api/article/category');
};

/**
 * 合成图片
 * @param param
 */
export const compositeImage: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/image/imageExchange', param);
};
