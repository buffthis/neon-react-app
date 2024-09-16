// import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles'; // 글로벌 스타일 import
import AppRoutes from './routes/AppRoutes.js';
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { setToken } from './api/api'; // 토큰 저장 함수 가져오기


function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // URL에서 토큰 추출
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const token = urlParams.get('token');

  //   if (token) {
  //     // 토큰이 있으면 로컬 스토리지에 저장
  //     setToken(token);
  //     console.log('토큰 저장 완료:', token); // 디버그용 로그 출력
  //     // URL에서 토큰 파라미터 제거
  //     navigate('/', { replace: true });
  //   }
  // }, [navigate]);
  
  return (
    <>
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <AppRoutes />
    </>
  );
}

export default App;