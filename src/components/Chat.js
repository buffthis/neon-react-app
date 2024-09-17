// src/components/Chat.js
import React, { useState, useEffect, useRef } from 'react';
import useChatStore from '../stores/useChatStore';
import useChatWebSocket from '../hooks/useChatWebSocket';
import {
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // 나가기 버튼 아이콘
import styles from './Chat.module.css';
import logo from '../assets/logo-sky-lg.png'; // 로고 이미지 임포트

const Chat = () => {
  const [message, setMessage] = useState('');
  const { messages } = useChatStore();
  const { sendMessage } = useChatWebSocket();
  const messagesEndRef = useRef(null);
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(true);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const chatMessage = {
      sender: username,
      content: message,
    };
    sendMessage(JSON.stringify(chatMessage));
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 줄바꿈 방지
      handleSendMessage();
    }
  };

  const handleUsernameSubmit = () => {
    if (username.trim() !== '') {
      setOpen(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Dialog open={open} disableEscapeKeyDown>
        <DialogTitle>유저네임을 입력하세요</DialogTitle>
        <DialogContent>
          <input
            autoFocus
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUsernameSubmit} style={{ color: '#C4D7EC' }}>
            채팅 시작
          </Button>
        </DialogActions>
      </Dialog>
      <Box className={styles.chatContainer}>
        <Box className={styles.header}>
          {/* 왼쪽에 배치된 뒤로가기 버튼 */}
          <IconButton className={styles.backButton}>
            <ArrowBackIosIcon />
          </IconButton>
          {/* 가운데에 배치된 로고 */}
          <img src={logo} alt="Logo" className={styles.logo} />
          {/* 오른쪽 빈 공간 */}
          <div style={{ width: '40px' }}></div>
        </Box>
        <Box className={styles.messagesContainer}>
          {messages.map((msg, index) => {
            const isMyMessage = msg.sender === username;
            const messageClass = isMyMessage
              ? `${styles.messageItem} ${styles.myMessage}`
              : `${styles.messageItem} ${styles.otherMessage}`;

            // 연속된 메시지의 위치에 따른 클래스 추가
            let positionClass = '';

            const prevMsg = messages[index - 1];
            const nextMsg = messages[index + 1];

            const isFirst =
              index === 0 || (prevMsg && prevMsg.sender !== msg.sender);
            const isLast =
              index === messages.length - 1 ||
              (nextMsg && nextMsg.sender !== msg.sender);

            if (isFirst && isLast) {
              positionClass = styles.single;
            } else if (isFirst) {
              positionClass = styles.first;
            } else if (isLast) {
              positionClass = styles.last;
            } else {
              positionClass = styles.middle;
            }

            // 유저네임 표시 여부 결정
            const showUsername =
              !isMyMessage &&
              (index === 0 || messages[index - 1].sender !== msg.sender);

            return (
              <div
                key={index}
                className={`${messageClass} ${positionClass}`}
              >
                {showUsername && (
                  <div className={styles.username}>{msg.sender}</div>
                )}
                <div className={styles.messageContent}>{msg.content}</div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </Box>
        <Box className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <IconButton className={styles.cameraButton}>
              <PhotoCameraIcon fontSize="small" />
            </IconButton>
            <textarea
              className={styles.inputField}
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
            />
            <IconButton
              onClick={handleSendMessage}
              className={styles.sendButton}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Chat;