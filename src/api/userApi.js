import axiosInstance from './axiosInstance';

/**
 * 내 사용자 정보를 가져오는 함수.
 * @returns {Promise} 내 사용자 정보
 */
export const fetchMe = async () => {
  try {
    const response = await axiosInstance.get('/users/me');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch me:', error);
    throw error;
  }
};