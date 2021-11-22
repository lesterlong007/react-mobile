import http, { HttpFC } from 'src/utils/http';

export const requestGetCardDetect: HttpFC = (param) => {
  return http.post('/tenacity-webapp/api/user/carddetect', param, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
