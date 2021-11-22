import http, { HttpFC } from 'src/utils/http';
/**
 * 查询话术分组列表
 * @param param
 */
export const getCollectGroupList: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/speechgroup', param);
};

// 分组保存接口
export const saveCollectGroup: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/spgroupsave', param);
};

// 话术分组删除接口
export const deleteCollectSpeech: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/spgroupdel', param);
};

// 获取话术分组的列表
export const getSpeechListByGroupId: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/speechlist', param);
};
// 保存话术
export const saveSpeech: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/spcontentsave', param);
};
// 删除话术
export const deleteSpeech: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/spcontentdel', param);
};

/**
 * 保存话术-营销平台
 * @param param
 */
export const saveWords: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/marketopt', param);
};

/**
 * 查询营销内容收藏列表
 * @param param
 */
export const queryMarketCollections: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/market/list', param);
};

/**
 * 修改收藏的营销话术
 * @param param
 */
export const saveCollectWords: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/market/save', param);
};

/**
 * 查询外部联系人id
 * @param param
 */
export const queryExternalInfo: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/collect/externalinfo', param);
};
