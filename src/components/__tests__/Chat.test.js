import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chat from '../Chat';

jest.mock('../../hooks/useChatWebSocket', () => ({
  __esModule: true,
  default: () => ({
    sendMessage: jest.fn(),
    readyState: 1,
  }),
}));

test('prompts for username before chatting', () => {
  render(<Chat />);
  const dialogTitle = screen.getByText(/enter your username/i);
  expect(dialogTitle).toBeInTheDocument();
});

test('allows user to set username and start chatting', () => {
  render(<Chat />);
  const usernameInput = screen.getByLabelText(/username/i);
  const startButton = screen.getByText(/start chatting/i);

  fireEvent.change(usernameInput, { target: { value: 'Tester' } });
  fireEvent.click(startButton);

  expect(screen.queryByText(/enter your username/i)).toBeNull();
  expect(screen.getByPlaceholderText(/type a message/i)).toBeInTheDocument();
});