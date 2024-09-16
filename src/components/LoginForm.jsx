// src/components/LoginForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 사용
import { login, getOAuth2LoginUrl, setToken } from '../api/api'; // 모듈화된 API 함수들 가져오기
import './LoginForm.css'; // CSS 파일 import
import googleButton from '../assets/button/google-button.png'; // 이미지 import
import naverButton from '../assets/button/naver-button.png'; // 이미지 import
import kakaoButton from '../assets/button/kakao-button.png'; // 이미지 import
import logoSky from '../assets/logo-sky-lg.png';

/**
 * 사용자 로그인 및 소셜 로그인을 위한 React 컴포넌트.
 */
const LoginForm = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용
  const [email, setEmail] = useState(''); // 이메일 상태 관리
  const [password, setPassword] = useState(''); // 비밀번호 상태 관리

  /**
   * 사용자가 입력한 이메일과 비밀번호로 로그인 요청을 보내는 함수.
   * 요청 성공 시 JWT 토큰을 로컬 스토리지에 저장하고 페이지를 이동.
   */
  const handleLogin = async () => {
    try {
      const token = await login(email, password); // API 모듈의 login 함수 호출
      setToken(token); // JWT 토큰을 로컬 스토리지에 저장
      alert('로그인 성공');
      navigate('/'); // 로그인 성공 후 홈 페이지로 이동
    } catch (error) {
      alert('로그인 실패: ' + error.message);
    }
  };

  /**
   * 소셜 로그인 버튼 클릭 시 해당 제공자에 대한 OAuth2 로그인 요청을 수행하는 함수.
   * @param {string} provider - 소셜 로그인 제공자 (예: 'google', 'naver', 'kakao')
   */
  const handleOAuth2Login = (provider) => {
    window.location.href = getOAuth2LoginUrl(provider); // 모듈화된 API 함수로부터 URL 가져오기
  };

  // 로그인 성공 후 JWT 토큰을 받아서 처리하는 함수
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // URL에서 토큰 가져오기
    if (token) {
      setToken(token); // JWT 토큰 저장
      console.log('Token saved to localStorage:', token);
      navigate('/'); // 메인 페이지로 이동
    }
  }, [navigate]);

  return (
    <div className="loginFormContainer">
      {/* 네온 로고 */}
      <a href='/'><img src={logoSky} alt="NEON Logo" className="logo" /></a>

      {/* 사용자 로그인 입력 필드 */}
      <div className="inputContainer">
        <input 
          type="text" 
          className="input" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          className="input" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      {/* 로그인 버튼 */}
      <button className="loginButton" onClick={handleLogin}>Login</button>

      {/* 소셜 로그인 버튼들 */}
      <div className="socialLoginContainer">
        <button className="socialButton" onClick={() => handleOAuth2Login('google')}>
          <img src={googleButton} alt="Google" /> {/* Google 로그인 버튼 */}
        </button>
        <button className="socialButton" onClick={() => handleOAuth2Login('naver')}>
          <img src={naverButton} alt="Naver" /> {/* Naver 로그인 버튼 */}
        </button>
        <button className="socialButton" onClick={() => handleOAuth2Login('kakao')}>
          <img src={kakaoButton} alt="Kakao" /> {/* Kakao 로그인 버튼 */}
        </button>
      </div>

      {/* 비밀번호 또는 이메일 찾기 및 회원가입 링크 */}
      <p className="footerText">
        Forgot your <a href="/">Password</a> or <a href="/">Email</a>? |{' '}
        <a href="/">Sign up</a>
      </p>
    </div>
  );
};

export default LoginForm;