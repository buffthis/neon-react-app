import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import useChatStore from '../stores/useChatStore';

const useChatWebSocket = () => {
  const { addMessage } = useChatStore();
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `${process.env.REACT_APP_WS_ORIGIN}/chat`
  );

  useEffect(() => {
    if (lastMessage !== null) {
      addMessage(JSON.parse(lastMessage.data));
    }
  }, [lastMessage, addMessage]);

  return { sendMessage, readyState };
};

export default useChatWebSocket;