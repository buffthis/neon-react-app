import { useEffect, useState } from 'react';
import useAuthStore from '../stores/authStore';
import { getTokenFromLocalStorage, validateToken, removeTokenFromLocalStorage } from '../utils/tokenUtils';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const { user, logout, setUser } = useAuthStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token && validateToken(token)) {
      setIsAuthenticated(true);
      // You could optionally set the user data in Zustand if it's not set
      if (!user) {
        setUser({ email: JSON.parse(atob(token.split('.')[1])).email }); // Extract email from token and set it in Zustand
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [user, setUser]);

  const handleLogout = () => {
    logout(); // Clear Zustand state
    removeTokenFromLocalStorage(); // Clear token from localStorage
    setIsAuthenticated(false); // Update local state
    navigate('/'); // Redirect to home page
  };

  return {
    isAuthenticated,
    handleLogout,
  };
};

export default useAuth;