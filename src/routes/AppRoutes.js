import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import CreateEventPage from '../pages/CreateEventPage';
import MaintenancePage from '../pages/MaintenancePage';
import Chat from '../components/Chat';
import MainPage from '../pages/MainPage';

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main */}
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/" element={<MaintenancePage/>} /> */}

      {/* Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Chat */}
      <Route path="/chat" element={<Chat />} /> 

      {/* Maintenance */}
      <Route path="/maintenance" element={<MaintenancePage />} />

      {/* Event Creation */}
      <Route path="/create-event" element={<CreateEventPage />} />
      
    </Routes>
  );
};

export default AppRoutes;