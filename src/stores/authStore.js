import { create } from 'zustand';

// Auth 상태 관리
const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  // 로그아웃 함수 추가
  logout: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_ORIGIN}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`, // JWT 토큰 전송
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // 로컬 스토리지에서 토큰 제거
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('refreshToken');

        // Zustand 상태 초기화
        set({ user: null });
      } else {
        console.error('Failed to log out from the server');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  isAuthenticated: () => !!set((state) => state.user),
}));

export default useAuthStore;