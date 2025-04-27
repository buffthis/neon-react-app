import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import githubLogo from '../assets/github-logo.png';
import linktreeLogo from '../assets/linktree-logo.jpg';
import image from '../assets/logo-sky-lg.png';
import notionLogo from '../assets/notion-logo.png';
import shaunLogo from '../assets/shaun-fit.png';
import useAuthStore from '../stores/authStore';
import './MaintenanceForm.css';
import { fetchMe } from '../api/userApi';

const Maintenance = () => {
  const [message] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore(); // user 상태 관리 및 로그아웃 함수

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchMe();  // userApi.js의 fetchMe 함수 호출
        console.log('user:', userData);
        setUser(userData); // 유저 정보 설정
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.status === 401) {
          console.log('/user/me Failed with 401 Unauthorized');
        }
      }
    };

    fetchUser(); // 컴포넌트가 렌더링될 때 fetchUser 호출
  }, [navigate, setUser]);

  return (
    <div className="maintenance-container">
      {/* 페이지 공통 요소 렌더링 */}
      <img src={image} alt="Maintenance" className="maintenance-image" />
      <h1 className="maintenance-title">{message}</h1>
      {/* 유저 정보가 있는 경우 유저 정보를 보여줌 */}
      {user && (
        <p className="maintenance-message">
          Welcome, {user.name}! {/* 유저 이름 표시 */}
        </p>
      )}
      <p className="maintenance-message">
        더 나은 서비스를 제공하기 위해 현재 점검 중입니다.
      </p>
      <div className="links-wrapper">
        <div className="link-container">
          <img src={shaunLogo} alt="Potato" className="logo-sm" />
          <a href="https://hyeongjun.me" className="link" target="_blank" rel="noopener noreferrer">https://hyeongjun.me</a>
        </div>
        <div className="link-container">
          <img src={linktreeLogo} alt="Linktree" className="logo-sm" />
          <a href="https://linktr.ee/xiyoon" className="link" target="_blank" rel="noopener noreferrer">https://linktr.ee/xiyoon</a>
        </div>
        <div className="link-container">
          <img src={githubLogo} alt="GitHub" className="logo-sm" />
          <a href="https://github.com/buffthis" className="link" target="_blank" rel="noopener noreferrer">https://github.com/buffthis</a>
        </div>
        <div className="link-container">
          <img src={notionLogo} alt="Notion" className="logo-sm" />
          <a href="https://www.notion.so/hyeongjun-dev/1a09683271d081a2ab96d306ca0af8c9?pvs=4" className="link" target="_blank" rel="noopener noreferrer">https://www.notion.so/neon</a>
        </div>
      </div>


    </div>
  );
};

export default Maintenance;