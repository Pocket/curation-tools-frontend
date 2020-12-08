import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Tab } from './Tab';

describe('The Tab component', () => {
  it('renders successfully', () => {
    render(<Tab label="Live" articleCount={222} />);

    const tab = screen.getByRole('tab');

    expect(tab).toBeInTheDocument();
    expect(tab).toHaveTextContent('Live');
    expect(within(tab).getByText('222')).toBeInTheDocument();
  });
});
