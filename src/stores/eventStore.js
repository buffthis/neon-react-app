// src/stores/eventStore.js
import create from 'zustand';
import { fetchOngoingEvents } from '../api/api';
import { devtools } from 'zustand/middleware';

const useEventStore = create(
  devtools((set, get) => ({
    events: [],
    loading: false,
    error: null,
    lastFetched: null, // 마지막 데이터가 로드된 시간을 저장하여 캐싱 제어
    fetchEvents: async () => {
      const { lastFetched } = get();
      
      // 이미 데이터를 가져온 경우 일정 시간 동안 재요청을 방지
      if (lastFetched && Date.now() - lastFetched < 5 * 60 * 1000) {
        return; // 5분 이내에 다시 요청하지 않음
      }

      set({ loading: true, error: null });
      try {
        const events = await fetchOngoingEvents();
        set({ events, loading: false, lastFetched: Date.now() });
      } catch (err) {
        set({ error: err.message, loading: false });
      }
    },
  }))
);

export default useEventStore;