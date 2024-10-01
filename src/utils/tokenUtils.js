export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('jwtToken');
  };
  
  export const validateToken = (token) => {
    if (!token) return false;
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      return decodedToken.exp > currentTime; // Check if token is still valid
    } catch (error) {
      return false; // If decoding fails or token is invalid
    }
  };
  
  export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken'); // Remove refresh token if stored
  };