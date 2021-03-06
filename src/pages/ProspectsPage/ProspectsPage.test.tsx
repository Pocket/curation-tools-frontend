import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, within, waitFor } from '@testing-library/react';
import { ProspectsPage } from './ProspectsPage';
import { Feed } from '../../models';

describe('The Prospects page', () => {
  let mockFeed: Feed;

  beforeEach(() => {
    mockFeed = { id: 'abc', name: 'en-US' };
  });

  it('renders with four tabs', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/en-US/prospects/'],
    });
    await waitFor(() => {
      render(
        <MockedProvider>
          <Router history={history}>
            <ProspectsPage feed={mockFeed} />
          </Router>
        </MockedProvider>
      );
    });

    const tabNavigation = screen.getByRole('tablist');
    const tabs = within(tabNavigation).getAllByRole('tab');

    expect(tabNavigation).toBeInTheDocument();
    expect(tabs.length).toEqual(4);
  });
});
