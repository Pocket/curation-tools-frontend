import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pocket Logo and name', () => {
  const { getByText } = render(<App />);
  const pocketLogo = screen.getByRole('img');
  const myName = getByText('Hope Ngerebara');
  expect(pocketLogo).toHaveAttribute('src', 'Pocket_logo.png');
  expect(myName).toBeInTheDocument();
});
