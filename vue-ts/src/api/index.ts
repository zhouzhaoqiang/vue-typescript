import * as Axios from 'axios';

import config from '@/config';
import router from '@/router';

const baseURL = config.url.basicUrl;
const axios = Axios.default.create({
  baseURL, // api请求的baseURL
  headers: { 'content-type': 'application/json;charset=UTF-8' },
  transformResponse: [
    data => {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = {};
      }
      if (data.status === 403) {
        router.push('/login');
      }
      return data;
    },
  ],
});

// get
export const _get = (req: any) => {
  return axios.get(req.url, { params: req.data });
};

// post
export const _post = (req: any) => {
  return axios({ method: 'post', url: `/${req.url}`, data: req.data });
};
