import http, { HttpFC } from 'src/utils/http';
/**
 * 查询任务详情
 * @param param
 */
export const getTaskDetail: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/task/paste', param);
};
/**
 * 上报任务完成
 * @param param
 */
export const updateTaskDone: HttpFC = (param: Object) => {
  return http.post('/tenacity-webapp/api/task/finish', param);
};
