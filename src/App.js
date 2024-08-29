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
    <div className="App">
      <img src={image} alt="logo" />
      <h1>{message}</h1>
      We’re making some improvements to our site. Thank you for your patience.
    </div>
  );
}

export default App;