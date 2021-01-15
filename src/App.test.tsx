import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  getCurrentFeed,
  FeedData,
  FeedVariables,
} from './services/queries/getCurrentFeed';
import App from './App';

describe('The App', () => {
  const mocks = [
    {
      request: {
        query: getCurrentFeed,
        variables: {
          name: 'en-US',
        } as FeedVariables,
      },
      result: {
        data: {
          currentFeed: {
            items: [{ id: 'abcdefg-lmnop-xyz-123', name: 'en-US' }],
          },
        } as FeedData,
      },
    },
  ];

  it('shows loading page while fetching data the API', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
