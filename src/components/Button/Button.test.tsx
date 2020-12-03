import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('The Button component', () => {
  it('renders with default props', () => {
    render(<Button />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/submit/i);
  });

  it('renders with custom props', () => {
    render(
      <Button buttonType="positive" size="large" variant="outlined">
        Snooze
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // only testing what the user can see, not the MUI style names applied
    expect(button).toHaveTextContent(/snooze/i);
  });
});
