// src/components/LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 사용
import './LoginForm.css'; // CSS 파일 import
import googleButton from '../assets/button/google-button.png'; // 이미지 import
import naverButton from '../assets/button/naver-button.png'; // 이미지 import
import kakaoButton from '../assets/button/kakao-button.png'; // 이미지 import
import logoSky from '../assets/logo-sky-lg.png';

const LoginForm = () => {
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const handleLogin = () => {
    // 로그인 처리 로직 (예: API 호출)
    // 로그인 후 페이지 이동
    navigate('/'); // 이동할 페이지 경로 설정
  };

  return (
    <div className="loginFormContainer">
        <a href='/'><img src={logoSky} alt="NEON Logo" className="logo" /></a>
      <div className="inputContainer">
        <input type="text" className="input" placeholder="Username" />
        <input type="password" className="input" placeholder="Password" />
      </div>
      {/* <div className="checkboxContainer">
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div> */}
      <button className="loginButton" onClick={handleLogin}>Login</button>
      <div className="socialLoginContainer">
      <button className="socialButton">
          <img src={googleButton} alt="Google" /> {/* 가져온 이미지 사용 */}
        </button>
        <button className="socialButton">
          <img src={naverButton} alt="Naver" /> {/* 가져온 이미지 사용 */}
        </button>
        <button className="socialButton">
          <img src={kakaoButton} alt="Kakao" /> {/* 가져온 이미지 사용 */}
        </button>
      </div>
      <p className="footerText">
        Forgot your <a href="/">Password</a> or <a href="/">Email</a>? |{' '}
        <a href="/">Sign up</a>
      </p>
    </div>
  );
};

export default LoginForm;