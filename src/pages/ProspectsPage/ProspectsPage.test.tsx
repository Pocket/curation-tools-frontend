import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, act, within, waitFor } from '@testing-library/react';
import { ProspectsPage } from './ProspectsPage';
import { Feed, ProspectListData, ProspectVariables } from '../../models';
import { RECORDS_ON_PAGE } from '../../constants';
import { GetPendingProspectsDocument } from '../../api/local/generatedTypes';

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

  xit('shows pending prospects on the default Prospects tab', async () => {
    const mocks = [
      {
        request: {
          query: GetPendingProspectsDocument,
          variables: {
            feedId: mockFeed.id,
            page: 1,
            perPage: RECORDS_ON_PAGE,
          } as ProspectVariables,
        },
        result: {
          data: {
            data: [
              {
                id: 'abc-123',
                altText: 'This is an image',
                author: 'Test author',
                excerpt: 'This is a short description',
                imageUrl: 'https://test.com/image.jpeg',
                publisher: 'Test publisher',
                source: 'Syndication',
                state: 'PENDING',
                title: 'Test title',
                topic: 'Health',
                url: 'https://test.com/test-title/',
              },
              {
                id: 'cde-345',
                altText: 'This is an image 2',
                author: 'Test author 2',
                excerpt: 'This is a short description 2',
                imageUrl: 'https://test.com/image2.jpeg',
                publisher: 'Test publisher 2',
                source: 'Syndication',
                snoozedUntil: null,
                title: 'Test title 2',
                topic: 'Art',
                url: 'https://test.com/test-title-2/',
              },
            ],
            meta: {
              totalResults: 2,
              currentPage: 1,
              perPage: RECORDS_ON_PAGE,
              nextPageUrl: '',
              prevPageUrl: '',
            },
          },
        } as ProspectListData,
      },
    ];

    const history = createMemoryHistory({
      initialEntries: ['/en-US/prospects/'],
    });

    await waitFor(() => {
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <ProspectsPage feed={mockFeed} />
          </Router>
        </MockedProvider>
      );
    });

    // wait for the mock API call to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const cardTitle = await screen.queryByText('/test title/i');
    expect(cardTitle).toBeInTheDocument();
  });
});
