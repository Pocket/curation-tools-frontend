import React from 'react';
import { render, screen } from '@testing-library/react';
import { Chip } from './Chip';

describe('The Chip component', () => {
  it('renders successfully', () => {
    render(<Chip label="48" color="default" />);

    expect(screen.getByText('48')).toBeInTheDocument();
  });
});
