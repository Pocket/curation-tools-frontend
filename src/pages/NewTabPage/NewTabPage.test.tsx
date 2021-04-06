import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor, within } from '@testing-library/react';
import { NewTabPage } from './NewTabPage';
import { Feed } from '../../models';

describe('The Edit And Approve Story page', () => {
  let history: any;
  let mockFeed: Feed;

  beforeEach(() => {
    mockFeed = { id: '123a-456b-789c', name: 'en-US' };

    history = createMemoryHistory({
      initialEntries: ['/en-US/newtab/live/'],
    });
  });

  it('renders with two tabs', async () => {
    await waitFor(() => {
      render(
        <MockedProvider>
          <Router history={history}>
            <NewTabPage feed={mockFeed} />
          </Router>
        </MockedProvider>
      );
    });

    const tabNavigation = screen.getByRole('tablist');
    const tabs = within(tabNavigation).getAllByRole('tab');

    expect(tabNavigation).toBeInTheDocument();
    expect(tabs.length).toEqual(2);
  });
});
