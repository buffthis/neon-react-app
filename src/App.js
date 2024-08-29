import React, { useEffect, useState } from 'react';
import image from './assets/logo-sky-lg.png'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://neon7.site/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="maintenance-container">
      <img src={image} alt="Maintenance" className="maintenance-image" />
      <h1 className="maintenance-title">현재 사이트 점검 중입니다</h1>
      <p className="maintenance-message">
        더 나은 서비스를 제공하기 위해 현재 점검 중입니다. 잠시 후 다시 시도해 주세요.
      </p>
      <small>{message}</small>
    </div>
  );
}

export default App;