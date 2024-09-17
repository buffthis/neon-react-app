// src/store/eventStore.js
import create from 'zustand';
import axios from 'axios';

const useEventStore = create((set) => ({
  events: [],
  loading: false,
  error: null,
  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('/api/events/ongoing');  // API 엔드포인트 수정 필요
      set({ events: response.data.events, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useEventStore;