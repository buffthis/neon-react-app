import axiosInstance from './axiosInstance';

/**
 * 티켓 목록을 가져오는 함수.
 * @returns {Promise} 티켓 목록
 */
export const fetchTickets = async () => {
  try {
    const response = await axiosInstance.get('/tickets');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch tickets:', error);
    throw error;
  }
};

/**
 * 새로운 티켓을 생성하는 함수.
 * @param {Object} ticket - 생성할 티켓 객체
 * @returns {Promise} 생성된 티켓 정보
 */
export const createTicket = async (ticket) => {
  try {
    const response = await axiosInstance.post('/tickets', ticket);
    return response.data;
  } catch (error) {
    console.error('Failed to create ticket:', error);
    throw error;
  }
};