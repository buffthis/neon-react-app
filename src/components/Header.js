import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'; // Hamburger icon
import { MdAccountCircle } from 'react-icons/md'; // User icon
import useAuth from '../hooks/useAuth'; // Custom hook for authentication logic
import './Header.css';
import logoLight from '../assets/logo-light.png';

const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth(); // Get authentication status and logout handler
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleMyPage = () => {
    navigate('/mypage');
  };

  const handleMessage = () => {
    navigate('/chat');
  };

  return (
    <header className="headerContainer">
      {/* Logo */}
      <div className="logoContainer">
        <img src={logoLight} alt="Logo" className="logoImage" />
      </div>

      {/* Search Bar */}
      <div className="searchBar">
        <input type="text" className="searchInput" placeholder="Search" />
        <button className="searchButton">
          <AiOutlineSearch size={20} />
        </button>
      </div>

      {/* User or Hamburger Icon based on authentication status */}
      <div className="userMenu">
        {isAuthenticated ? (
          <div className="userIcon">
            {/* User Icon shown when authenticated */}
            <MdAccountCircle size={32} />
            <div className="dropdownMenu">
              <div className="dropdownMenuItem" onClick={handleMyPage}>My Page</div>
              <div className="dropdownMenuItem" onClick={handleMessage}>Message</div>
              <div className="dropdownMenuItem" onClick={handleLogout}>Logout</div>
            </div>
          </div>
        ) : (
          <div className="hamburgerIcon">
            {/* Hamburger Icon shown when not authenticated */}
            <AiOutlineMenu size={32} />
            <div className="dropdownMenu">
              <div className="dropdownMenuItem" onClick={handleLogin}>Login</div>
              <div className="dropdownMenuItem" onClick={handleLogin}>Sign Up</div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;