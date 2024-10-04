import React, { useState, useEffect, useRef } from 'react';
import useChatStore from '../stores/useChatStore';
import useChatWebSocket from '../hooks/useChatWebSocket';
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // 나가기 버튼 아이콘
import styles from './Chat.module.css';
import logo from '../assets/logo-sky-lg.png';
import { useNavigate } from 'react-router-dom'; // To redirect on error
import { fetchMe } from '../api/userApi';

const Chat = () => {
  const [message, setMessage] = useState('');
  const { messages } = useChatStore();
  const { sendMessage } = useChatWebSocket();
  const messagesEndRef = useRef(null);
  const [username, setUsername] = useState(''); // This will hold the user's name from backend
  const [open, setOpen] = useState(true); // Dialog will open based on username fetch
  const navigate = useNavigate();

  // Fetch the user's name from the backend
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userData = await fetchMe();  // Use the fetchMe function from userApi.js
        setUsername(userData.name);  // Set the username to the fetched name
        setOpen(false);  // Close dialog once we have the username
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigate('/login');  // Redirect to login if there's an error (e.g., unauthorized)
      }
    };
    fetchUserName();
  }, [navigate]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    const chatMessage = {
      sender: username, // Use the fetched username
      content: message,
    };
    sendMessage(JSON.stringify(chatMessage));
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent line breaks
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Dialog to input username is no longer necessary since we're fetching it */}
      <Dialog open={open} disableEscapeKeyDown>
        <DialogTitle>Fetching User Information...</DialogTitle>
        <DialogContent>
          <p>Please wait while we retrieve your username.</p>
        </DialogContent>
      </Dialog>
      <Box className={styles.chatContainer}>
        <Box className={styles.header}>
          {/* Back button */}
          <IconButton className={styles.backButton}>
            <ArrowBackIosIcon />
          </IconButton>
          {/* Logo */}
          <img src={logo} alt="Logo" className={styles.logo} />
          {/* Right side spacing */}
          <div style={{ width: '40px' }}></div>
        </Box>
        <Box className={styles.messagesContainer}>
          {messages.map((msg, index) => {
            const isMyMessage = msg.sender === username;
            const messageClass = isMyMessage
              ? `${styles.messageItem} ${styles.myMessage}`
              : `${styles.messageItem} ${styles.otherMessage}`;

            // Position classes based on message sequence
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

            // Show username if not my message
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