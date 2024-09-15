import { create } from 'zustand';  // 'default import'에서 'named import'로 수정

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;