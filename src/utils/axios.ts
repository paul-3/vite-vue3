import Axios from 'axios';
import { ElMessage } from 'element-plus';
const baseURL = 'https://api.github.com';
const axios = Axios.create({
  baseURL,
  timeout: 20000
});

axios.interceptors.request.use(config => {
  /**
   * 这里根据实际情况来对config做处理
   */
  return config;
}, err => {
  return Promise.reject(err);
});
axios.interceptors.response.use(response => {
  return response;
}, err => {
  if (err.response && err.response.data) {
    const code = err.response.status;
    const msg = err.response.data.message;
    ElMessage.error(`Code: ${code}, Message: ${msg}`);
    console.error('[Axios error]', err.response);
  } else {
    ElMessage.error(`${err}`);
  }
  return Promise.reject(err);
});

export default axios;
