import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../utils/tokenUtils';
import githubLogo from '../assets/github-logo.png';
import linktreeLogo from '../assets/linktree-logo.jpg';
import image from '../assets/logo-sky-lg.png';
import notionLogo from '../assets/notion-logo.png';
import potatoLogo from '../assets/potato-fit.png';
import useAuthStore from '../stores/authStore';
import './MaintenanceForm.css';

const Maintenance = () => {
  const [message] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore(); // user 상태 관리 및 로그아웃 함수

  useEffect(() => {
    const fetchUser = async () => {
      const token = getTokenFromLocalStorage(); // 로컬 스토리지에서 JWT 토큰 가져오기
      console.log('userinfo token:', token);

      if (token) {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_ORIGIN}/users/me`, {
            headers: {
              'Authorization': `Bearer ${token}` // JWT 토큰을 Authorization 헤더로 추가
            }
          });

          if (response.ok) {
            console.log('/api/user/me Success');
            const contentType = response.headers.get('content-type');
            console.log('response:', response);
            console.log('contentType: ', contentType);
            const userData = await response.json();
            console.log('user:', userData);
            setUser(userData); // 유저 정보 설정
          } else if (response.status === 401) {
            console.log('/api/user/me Failed with 401 Unauthorized');
            // 리다이렉트 대신 에러 메시지 출력
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.log('No token found, skipping user fetch.'); // 토큰이 없을 경우
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
          <img src={potatoLogo} alt="Potato" className="logo-sm" />
          <a href="https://siyoon.site" className="link" target="_blank" rel="noopener noreferrer">https://siyoon.site</a>
        </div>
        <div className="link-container">
          <img src={linktreeLogo} alt="Linktree" className="logo-sm" />
          <a href="https://linktr.ee/xiyoon" className="link" target="_blank" rel="noopener noreferrer">https://linktr.ee/xiyoon</a>
        </div>
        <div className="link-container">
          <img src={githubLogo} alt="GitHub" className="logo-sm" />
          <a href="https://github.com/SteamedPapaya" className="link" target="_blank" rel="noopener noreferrer">https://github.com/SteamedPapaya</a>
        </div>
        <div className="link-container">
          <img src={notionLogo} alt="Notion" className="logo-sm" />
          <a href="https://www.notion.so/xiyoon/f8777a529adc4ae9997a1ae26fca172c?pvs=4" className="link" target="_blank" rel="noopener noreferrer">https://www.notion.so/xiyoon/neon</a>
        </div>
      </div>


    </div>
  );
};

export default Maintenance;