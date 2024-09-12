// src/pages/Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import AuthLayout from '../layouts/AuthLayout';

const Login = () => {
  return (
    <AuthLayout> {/* AuthLayout으로 로그인 페이지 레이아웃 설정 */}
      <LoginForm /> {/* LoginForm 컴포넌트 렌더링 */}
    </AuthLayout>
  );
};

export default Login;