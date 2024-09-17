import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Routes와 Route로 변경
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Maintenance from '../components/MaintenancePage';
import Chat from '../components/Chat';
import OngoingEventsList from '../components/OngoingEventsList'; // 진행 중인 이벤트 목록 페이지
import CreateEventForm from '../components/CreateEventForm'; // 이벤트 생성 폼

const AppRoutes = () => {
  return (
    <Routes>
      {/* MainLayout을 사용하는 기본 경로 */}
      <Route path="/" element={<MainLayout><OngoingEventsList /></MainLayout>} />
      {/* 로그인 페이지는 AuthLayout 사용 */}
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      {/* 채팅 페이지 */}
      <Route path="/chat" element={<MainLayout><Chat /></MainLayout>} />
      {/* 유지보수 페이지 */}
      <Route path="/maintenance" element={<MainLayout><Maintenance /></MainLayout>} />
      {/* 이벤트 생성 페이지 */}
      <Route path="/create-event" element={<MainLayout><CreateEventForm /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;