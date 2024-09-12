// src/layouts/AuthLayout.js
import React from 'react';
import './AuthLayout.css'; // CSS 파일 import

const AuthLayout = ({ children }) => {
  return (
    <div className="authLayout">
      <div className="authContent">
        {children} {/* 자식 컴포넌트 렌더링 (LoginForm 등) */}
      </div>
    </div>
  );
};

export default AuthLayout;