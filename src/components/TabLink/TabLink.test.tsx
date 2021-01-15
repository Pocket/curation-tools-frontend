import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { TabLink } from './TabLink';
import { MemoryRouter } from 'react-router-dom';

describe('The TabLink component', () => {
  it('renders successfully', () => {
    render(
      <MemoryRouter>
        <TabLink tabSelected={false} to="/any/path/">
          Tab title
        </TabLink>
      </MemoryRouter>
    );

    const tabLink = screen.getByRole('link');
    //
    expect(tabLink).toBeInTheDocument();
    expect(tabLink).toHaveTextContent('Tab title');
  });

  it('renders with article count', () => {
    render(
      <MemoryRouter>
        <TabLink count={22} tabSelected to="/any/path/">
          Tab title
        </TabLink>
      </MemoryRouter>
    );

    const tabLink = screen.getByRole('link');
    expect(within(tabLink).getByText('22')).toBeInTheDocument();
  });

  it('renders with article count that is larger than 50', () => {
    render(
      <MemoryRouter>
        <TabLink count={57} tabSelected to="/any/path/">
          Tab title
        </TabLink>
      </MemoryRouter>
    );

    const tabLink = screen.getByRole('link');
    expect(within(tabLink).getByText('50+')).toBeInTheDocument();
  });
});
