// src/layouts/MainLayout.js
import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import './MainLayout.css'; // CSS 파일 import

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <header className="header">
        <Header /> {/* 상단 헤더 컴포넌트 */}
      </header>
      <main className="content">
        {children} {/* 페이지 컨텐츠 */}
      </main>
      <footer className="bottomNav">
        <BottomNav /> {/* 하단 네비게이션 컴포넌트 */}
      </footer>
    </div>
  );
};

export default MainLayout;