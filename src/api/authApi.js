import axiosInstance from './axiosInstance';
import { setTokenToLocalStorage } from '../utils/tokenUtils';

/**
  * 사용자 로그인 API 호출 함수.
  * @param {string} email - 사용자의 이메일
  * @param {string} password - 사용자의 비밀번호
  * @returns {Promise} 로그인 결과로 JWT 토큰 반환
  */
export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/token', { email, password });
    const token = response.data.accessToken;
    setTokenToLocalStorage(token);  // tokenUtils의 setToken을 사용하여 토큰 저장
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

/**
 * OAuth2 소셜 로그인 URL을 반환하는 함수.
 * @param {string} provider - 소셜 로그인 제공자 (예: 'google', 'naver', 'kakao')
 * @returns {string} 소셜 로그인 URL
 */
export const getOAuth2LoginUrl = (provider) => {
  return `https://user.neon7.site/oauth2/authorization/${provider}`;
};