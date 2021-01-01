import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  getCurrentFeed,
  FeedData,
  FeedVariables,
} from './services/queries/getCurrentFeed';
import App from './App';
import { act } from 'react-dom/test-utils';
import { ApolloError } from '@apollo/client';

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

  it('displays an error if the API call was unsuccessful', async () => {
    const mocksWithError = [
      {
        request: {
          query: getCurrentFeed,
          variables: {
            name: 'en-US',
          } as FeedVariables,
        },
        error: new ApolloError({
          networkError: new Error('An error occurred.'),
        }),
      },
    ];

    render(
      <MockedProvider mocks={mocksWithError} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(screen.getByText(/network error/i)).toBeInTheDocument();
  });

  xit('displays the page successfully', async () => {
    const { debug } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });
    debug();
    expect(screen.getByText(/^lloading.../i)).toBeInTheDocument();
  });
});
