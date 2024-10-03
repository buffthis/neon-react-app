import axios from 'axios';
import { getTokenFromLocalStorage } from '../utils/tokenUtils';

// 환경변수에서 API 오리진을 가져옵니다. 기본값은 http://localhost:8080입니다.
const API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'http://localhost:8080';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: API_ORIGIN,
});

// 요청 인터셉터 설정: 모든 요청에 JWT 토큰을 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();  // tokenUtils에서 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;