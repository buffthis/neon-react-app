// src/components/BottomNav.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import './BottomNav.css'; // CSS 파일 import

const BottomNav = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleLogin = () => {
      navigate('/login'); // /login 경로로 이동
    };

  return (
    <nav className="bottomNav">
      <button className="navButton">
        <AiOutlineHome size={24} />
        <span>둘러보기</span>
      </button>
      <button className="navButton">
        <AiOutlineHeart size={24} />
        <span>위시리스트</span>
      </button>
      <button className="navButton" onClick={handleLogin}>
        <AiOutlineUser size={24} />
        <span>로그인</span>
      </button>
    </nav>
  );
};

export default BottomNav;