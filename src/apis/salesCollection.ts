/**
 * @name salesCollection
 * @author Lester
 * @date 2021-06-21 16:46
 */

import http, { HttpFC } from 'src/utils/http';

export const queryProcessHomeData: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/process/home', param);
};

/**
 * 查询流程话术列表
 * @param param
 */
export const queryProcessList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/process/catalog/list', param);
};

/**
 * 查询流程话术内容列表
 * @param param
 */
export const queryProcessWordsList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/process/content', param);
};

/**
 * 查询异议处理列表
 * @param param
 */
export const queryObjectionList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/dissent/catalog/list', param);
};

/**
 * 查询异议处理话术列表
 * @param param
 */
export const queryObjectionWordsList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/dissent/content', param);
};

/**
 * 智能提问
 * @param params
 */
export const queryQuestionAns: HttpFC = (params: Object) => {
  return http.post('/tenacity-webapp/api/smart/faq/question', params);
};

/**
 * 获取场景话术的推荐话题
 * @param params
 */
export const querySceneRecommend: HttpFC = (params: Object) => {
  return http.post('/tenacity-webapp/api/smart/scene/recommend', params);
};

/**
 * 获取场景话术的推荐话题
 * @param params
 */
export const querySceneList: HttpFC<{ externalUserId: string }> = (params) => {
  return http.post('/tenacity-webapp/api/smart/scene/catalog/home', params);
};

/**
 * @description 获取场景话术的3级目录结构数据
 * @param {string} catalogId
 * @param {externalUserId} string
 */
export const querySceneByCatolog3: HttpFC<{ catalogId: string; externalUserId: string }> = (params) => {
  return http.post('/tenacity-webapp/api/smart/scene/catalog/list', params);
};

/**
 * @description 获取场景话术的3级目录结构数据
 * @param {string} catalogId
 * @param {externalUserId} string
 */
export const querySceneContent: HttpFC<{ catalogId: string; externalUserId: string }> = (params) => {
  return http.post('/tenacity-webapp/api/smart/scene/content', params);
};

// 问答知识
/**
 * @description 获取问答知识列表
 * @param {string} catalogId
 * @param {externalUserId} string
 */
export const queryFaqList: HttpFC<{ externalUserId: string }> = (params) => {
  return http.post('/tenacity-webapp/api/smart/faq/home', params);
};

/**
 * @description 获取问答知识的2&3级目录列表数据
 * @param {string} catalogId
 * @param {externalUserId} string
 */
export const queryFaqListByCatalogId: HttpFC<{ externalUserId: string; catalogId: string }> = (params) => {
  return http.post('/tenacity-webapp/api/smart/faq/catalog/list', params);
};

/**
 * @description 获取答案
 * @param {string} catalogId
 * @param {externalUserId} string
 */
export const queryFaqCatalogContent: HttpFC<{ externalUserId: string; catalogId: string }> = (params) => {
  return http.post('/tenacity-webapp/api/smart/faq/catalog/content', params);
};

/**
 * 查询非车流程话术列表
 * @param params
 */
export const queryUnCarProcessList: HttpFC = (params: Object) => {
  return http.post('/tenacity-webapp/api/smart/noncar/catalog/list', params);
};

/**
 * 查询非车流程话术内容列表
 * @param param
 */
export const queryUnCarWordsList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/noncar/content', param);
};

/**
 * 获取话术可变参数值接口
 * @param
 */
export const getAutoParams: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/param/value', param);
};
/**
 * 获取音视频详情
 * @param
 */
export const getMediaInfo: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/smart/media/info', param);
};
