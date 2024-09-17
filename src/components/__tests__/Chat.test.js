import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chat from '../Chat';
// import useChatStore from '../../stores/useChatStore';

jest.mock('../../hooks/useChatWebSocket', () => ({
  __esModule: true,
  default: () => ({
    sendMessage: jest.fn(),
    readyState: 1,
  }),
}));

test('renders chat input and send button', () => {
  render(<Chat />);
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByText(/send/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('sends message when send button is clicked', () => {
  const { sendMessage } = require('../../hooks/useChatWebSocket').default();
  render(<Chat />);
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByText(/send/i);

  fireEvent.change(inputElement, { target: { value: 'Hello World' } });
  fireEvent.click(buttonElement);

  expect(sendMessage).toHaveBeenCalledWith(
    JSON.stringify({
      sender: 'Anonymous',
      content: 'Hello World',
    })
  );
});