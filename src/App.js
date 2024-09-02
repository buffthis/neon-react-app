import React, { useEffect, useState } from 'react';
import image from './assets/logo-sky-lg.png';
import './MaintenancePage.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://api.neon7.site/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="maintenance-container">
      <img src={image} alt="Maintenance" className="maintenance-image" />
      <h1 className="maintenance-title">{message}</h1>
      <p className="maintenance-message">
        더 나은 서비스를 제공하기 위해 현재 점검 중입니다.
      </p>
      {/* <p className="maintenance-note">
        이전 버전의 서비스를 이용하시려면 <a href="http://ec2-54-180-133-79.ap-northeast-2.compute.amazonaws.com:8080" className="maintenance-link">여기</a>를 클릭하세요.
      </p>
      <p className="maintenance-small-note">
        일부 기능이 동작하지 않을 수 있습니다.
      </p> */}
    </div>
  );
}

export default App;