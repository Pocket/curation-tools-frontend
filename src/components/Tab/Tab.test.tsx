import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Tab } from './Tab';

describe('The Tab component', () => {
  it('renders successfully', () => {
    render(
      <MemoryRouter initialEntries={[`/en-US/newtab/`]}>
        <Tab
          label="Live"
          count={22}
          value="/en-US/newtab/live/"
          to="/en-US/newtab/live"
        />
      </MemoryRouter>
    );

    const tab = screen.getByRole('tab');

    expect(tab).toBeInTheDocument();
    expect(tab).toHaveTextContent('Live');
    expect(within(tab).getByText('22')).toBeInTheDocument();
  });
});
