import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders logo and button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Segun Ogundipe/i);
  expect(linkElement).toBeInTheDocument();
});
