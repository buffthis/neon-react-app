// src/routes/AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Routes와 Route로 변경
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Maintenance from '../components/MaintenancePage';

const AppRoutes = () => {
  return (
    <Routes> {/* Switch 대신 Routes 사용 */}
      {/* 인증 레이아웃이 필요한 경우 */}
      <Route path="/" element={<MainLayout><Maintenance/></MainLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} /> 
      
      {/* 다른 페이지 경로 추가 */}
    </Routes>
  );
};

export default AppRoutes;