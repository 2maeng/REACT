import axios from 'axios';
import { useAuth } from 'contexts/auth';
import TokenService from 'repository/TokenService';
import AuthApi from './authApi';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
  // 프론트엔드 웹 스토리지의 쿠키를 백엔드 서버와 공유 가능
});

Axios.interceptors.request.use(
  (config) => {
    const access_token = TokenService.getToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    }
    return config;
  },
  // config

  (error) => {
    return Promise.reject(error);
  }
  // error
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const auth = useAuth();
    if (error.response.status === 401) {
      await AuthApi.logout();
      auth.logout();
    }

    const originalRequest = error.config;
    if (error.response.status === 403 && originalRequest._retry) {
      originalRequest._retry = true;

      const res = await Axios.post(`/user/jwt`);
      if (res.status === 200) {
        const token = res.data.data;
        TokenService.setToken(token);
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return Axios(originalRequest);
      }

      /**
       * const res = 백엔드에서 refresh token으로 access_token을 응답받는 주소
       *             axios.post("/jwtRefresh")
       *
       * 1. refreshToken이 쿠키로 관리되고있다면
       *    보낼 필요가 없다. 백엔드와 프론트엔드 쿠키값을 공유할 수 있음
       *
       * 2. 로컬스토리지, 세션스토리지, 웹쿠키(공유하지 않는다는 전제)
       *    axios.post("/jwtRefresh", {
       *      refresh_token: RefreshTokenService.getToken();
       *    })
       *
       * ===> access_token이 전달될 것임
       * const accessToken = res.data.token
       * TokenServer.setToken(accessToken);
       *
       * Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
       *  return Axios(originalRequest)
       */
    }
    return Promise.reject(error);
  }
);

/**
 * eslint
 * prettier
 * husky
 */
