import React from 'react';
import { render, screen } from '@testing-library/react';
import { Notification } from './Notification';

describe('The Notification component', () => {
  it('renders successfully', () => {
    const message = 'Changes saved! Redirecting...';

    render(
      <Notification
        message={message}
        isOpen={true}
        type="success"
        handleClose={jest.fn()}
      />
    );
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
