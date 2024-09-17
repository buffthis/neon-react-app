import React, { useState } from 'react';
import useChatStore from '../stores/useChatStore';
import useChatWebSocket from '../hooks/useChatWebSocket';

const Chat = () => {
  const [message, setMessage] = useState('');
  const { messages } = useChatStore();
  const { sendMessage } = useChatWebSocket();

  const handleSendMessage = () => {
    const chatMessage = {
      sender: 'Anonymous',
      content: message,
    };
    sendMessage(JSON.stringify(chatMessage));
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;