import axios from 'axios';

// 환경변수에서 API 오리진을 가져옵니다. 기본값은 http://localhost:8080입니다.
const API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'http://localhost:8080';

/**
 * JWT 토큰을 저장하는 함수.
 * @param {string} token - JWT 토큰 문자열
 */
export const setToken = (token) => {
  localStorage.setItem('jwtToken', token);
};

/**
 * JWT 토큰을 가져오는 함수.
 * @returns {string|null} JWT 토큰 문자열 또는 null
 */
export const getToken = () => {
  return localStorage.getItem('jwtToken');
};


/**
  * API를 호출하여 사용자의 로그인 정보를 확인하고 JWT 토큰을 반환하는 함수.
  * @param {string} email - 사용자의 이메일 주소
  * @param {string} password - 사용자의 비밀번호
  * @returns {Promise} 로그인 결과에 따라 JWT 토큰을 포함한 응답 또는 오류
  */
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_ORIGIN}/api/auth/token`, { email, password });
    const token = response.data.accessToken
    console.log('accessToken:', token);
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
  return `${API_ORIGIN}/oauth2/authorization/${provider}`;
};

/**
 * 진행 중인 이벤트 목록을 가져오는 함수.
 * @returns {Promise} 진행 중인 이벤트 목록 또는 오류
 */
export const fetchOngoingEvents = async () => {
  try {
    const response = await axios.get(`${API_ORIGIN}/api/events`);
    return response.data;  // 필요한 데이터 형식에 따라 조정
  } catch (error) {
    console.error('Failed to fetch ongoing events:', error);
    throw error;
  }
};

/**
 * 새로운 이벤트를 생성하는 함수.
 * @param {Object} event - 생성할 이벤트 객체
 * @returns {Promise} 생성된 이벤트 또는 오류
 */
export const createEvent = async (event) => {
  try {
    const response = await axios.post(`${API_ORIGIN}/api/events`, event);
    return response.data;
  } catch (error) {
    console.error('Failed to create event:', error);
    throw error;
  }
};

/**
 * 티켓 목록을 가져오는 함수.
 * @returns {Promise} 티켓 목록 또는 오류
 */
export const fetchTickets = async () => {
  try {
    const response = await axios.get(`${API_ORIGIN}/api/tickets`);
    return response.data;  // 필요한 데이터 형식에 따라 조정
  } catch (error) {
    console.error('Failed to fetch tickets:', error);
    throw error;
  }
};

/**
 * 새로운 티켓을 생성하는 함수.
 * @param {Object} ticket - 생성할 티켓 객체
 * @returns {Promise} 생성된 티켓 또는 오류
 */
export const createTicket = async (ticket) => {
  try {
    const response = await axios.post(`${API_ORIGIN}/api/tickets`, ticket);
    return response.data;
  } catch (error) {
    console.error('Failed to create ticket:', error);
    throw error;
  }
};