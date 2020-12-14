import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('The Modal component', () => {
  it('renders successfully', () => {
    render(
      <Modal
        title="Loading..."
        isOpen={true}
        onClose={() => {
          return true;
        }}
      />
    );
    const modal = screen.getByText(/^Loading...$/i);

    expect(modal).toBeInTheDocument();
  });
});
