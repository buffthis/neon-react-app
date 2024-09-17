// src/stores/eventStore.js
import create from 'zustand';
import { fetchOngoingEvents } from '../api/api';

const useEventStore = create((set) => ({
  events: [],
  loading: false,
  error: null,
  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const events = await fetchOngoingEvents();  // API 호출
      set({ events, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useEventStore;