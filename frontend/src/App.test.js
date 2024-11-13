// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontend service and backend message', () => {
  render(<App />);
  const titleElement = screen.getByText(/Frontend Service/i);
  expect(titleElement).toBeInTheDocument();

  const messageElement = screen.getByText(/Message from Backend:/i);
  expect(messageElement).toBeInTheDocument();
});

