import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import './MaintenancePage.css';
import image from '../assets/logo-sky-lg.png';
import githubLogo from '../assets/github-logo.png';
import notionLogo from '../assets/notion-logo.png';
import linktreeLogo from '../assets/linktree-logo.jpg';
import potatoLogo from '../assets/potato-fit.png';

const Maintenance = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
      fetch('https://api.neon7.site/hello')
        .then(response => response.text())
        .then(data => setMessage(data))
        .catch(error => console.error('Error fetching message:', error));
    }, []);

    const navigate = useNavigate();
    const { user, setUser, logout } = useAuthStore();
  
    useEffect(() => {
      // 사용자 정보 가져오기 로직 추가 (예: API 호출)
      const fetchUser = async () => {
        const response = await fetch('/api/user/me');  // 실제 API 엔드포인트로 수정 필요
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          navigate('/login');
        }
      };
  
      fetchUser();
    }, [navigate, setUser]);
  
    if (!user) {
      return (
          <div className="maintenance-container">
          <img src={image} alt="Maintenance" className="maintenance-image" />
          <h1 className="maintenance-title">{message}</h1>
          <p className="maintenance-message">
            더 나은 서비스를 제공하기 위해 현재 점검 중입니다.
          </p>
          {/* <p className="maintenance-note">
            이전 버전의 서비스를 이용하시려면 <a href="https://api.neon7.site" className="maintenance-link">여기</a>를 클릭하세요.
          </p>
          <p className="maintenance-small-note">
            일부 기능이 동작하지 않을 수 있습니다.
          </p> */}
          <div className="links-wrapper">
              <div className="link-container">
              <img src={potatoLogo} alt="Potato" className="logo-sm" />
              <a href="https://siyoon.site" className="link" target="_blank"와 rel="noopener noreferrer">https://siyoon.site</a>
            </div>
            <div className="link-container">
              <img src={linktreeLogo} alt="Linktree" className="logo-sm" />
              <a href="https://linktr.ee/xiyoon" className="link" target="_blank"와 rel="noopener noreferrer">https://linktr.ee/xiyoon</a>
            </div>
            <div className="link-container">
              <img src={githubLogo} alt="GitHub" className="logo-sm" />
              <a href="https://github.com/SteamedPapaya" className="link" target="_blank"와 rel="noopener noreferrer">https://github.com/SteamedPapaya</a>
            </div>
            <div className="link-container">
              <img src={notionLogo} alt="Notion" className="logo-sm" />
              <a href="https://www.notion.so/xiyoon/f8777a529adc4ae9997a1ae26fca172c?pvs=4" className="link" target="_blank"와 rel="noopener noreferrer">https://www.notion.so/xiyoon/neon</a>
            </div>
          </div>
          </div>
      );
    }
  
    return (
      <div className="home-page">
        <h2>Welcome, {user.name}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  };
  
  export default Maintenance;