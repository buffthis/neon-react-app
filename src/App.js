import { GlobalStyles } from './styles/globalStyles'; // 글로벌 스타일 import
import AppRoutes from './routes/AppRoutes.js';
import React from 'react';

function App() {

  return (
    <>
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <AppRoutes />
    </>
  );
}

export default App;