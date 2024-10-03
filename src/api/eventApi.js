import axiosInstance from './axiosInstance';

/**
 * 진행 중인 이벤트 목록을 가져오는 함수.
 * @returns {Promise} 진행 중인 이벤트 목록
 */
export const fetchOngoingEvents = async () => {
  try {
    const response = await axiosInstance.get('/events');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch ongoing events:', error);
    throw error;
  }
};

/**
 * 새로운 이벤트를 생성하는 함수.
 * @param {Object} event - 생성할 이벤트 객체
 * @returns {Promise} 생성된 이벤트 정보
 */
export const createEvent = async (event) => {
  try {
    const response = await axiosInstance.post('/events', event);
    return response.data;
  } catch (error) {
    console.error('Failed to create event:', error);
    throw error;
  }
};