import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { FeedData, FeedVariables } from './models';
import App from './App';
import { GetCurrentFeedDocument } from './api/local/generatedTypes';

describe('The App', () => {
  const mocks = [
    {
      request: {
        query: GetCurrentFeedDocument,
        variables: {
          name: 'en-US',
        } as FeedVariables,
      },
      result: {
        data: { id: 'abcdefg-lmnop-xyz-123', name: 'en-US' },
      } as FeedData,
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
