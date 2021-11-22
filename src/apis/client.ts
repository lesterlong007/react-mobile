/**
 * @name clientList
 * @author Lester
 * @date 2021-06-29 15:21
 */

import http, { HttpFC, VoidFC } from 'src/utils/http';

/**
 * 查询客户列表接口
 */
export const queryTagList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/list', param);
};

/**
 * 获取标签库接口
 * @param param
 */
export const queryAttrTagList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/list', param);
};

/**
 * 查询客户全量自定义标签接口
 * @param param
 */
export const queryPersonalTagList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/tag/personal/list', param);
};

/**
 * 修改客户自定义标签接口
 * @param param
 */
export const queryModifyPersonalTagList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/tag/personal/modify', param);
};

/**
 * 查询客户详情信息
 * @param param
 */
export const queryClientInfo: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/detail', param);
};

/**
 * 修改客户基本信息接口
 * @param param
 */
export const queryUpdateClientBaseInfo: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/info/modify', param);
};

/**
 * 搜索标签库接口
 * @param param
 */
export const querytagSearch: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/search', param);
};

/**
 * 查询客户画像
 * @param param
 */
export const queryClientPortrait: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/portrait', param);
};

/**
 * 查询标签组信息接口
 * @param param
 */

export const queryClientPortraitGroupInfo: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/group/info', param);
};

/**
 * 修改客户标签接口
 * @param param
 */

export const queryUpdateClientPortrait: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/tag/modify', param);
};

/**
 * 查询客户访问记录
 * @param param
 */

export const queryClientRecord: HttpFC = async (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/portrait', param);
};

/**
 * 查看客户动态
 * @param param
 */
export const queryClientDynamic: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/data/client/dynamic', param);
};
/**
 * 查看客户服务建议
 * @param param
 */
export const queryClientServicesSuggestion: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/tag/client/recommend', param);
};

/**
 * 查询车品牌列表
 */
export const queryClientCarBrand: VoidFC = () => {
  return http.post('/tenacity-webapp/api/tag/car/brand/list', { pageNum: 1, pageSize: 9999 });
};

// 修改车标签
export const requestModifyCarTag: HttpFC = (param) => {
  return http.post('/tenacity-webapp/api/tag/client/tag/car/modify', param);
};

// 修改客户车辆信息接口
export const requestModifyCarInfo: HttpFC = (param) => {
  return http.post('/tenacity-webapp/api/tag/client/car/modify', param);
};
