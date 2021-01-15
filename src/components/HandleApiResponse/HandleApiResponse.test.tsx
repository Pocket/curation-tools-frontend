import React from 'react';
import { render, screen } from '@testing-library/react';
import { HandleApiResponse } from './HandleApiResponse';
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';

describe('The HandleApiResponse component', () => {
  it('renders a loading message while waiting for data to be fetched', () => {
    render(
      <HandleApiResponse
        loading={true}
        loadingText="Loading data, please wait..."
        error={undefined}
      />
    );

    expect(screen.getByText(/^loading data/i)).toBeInTheDocument();
  });

  it('renders an error if the call to the API has failed', () => {
    render(
      <HandleApiResponse
        loading={false}
        error={
          new ApolloError({
            graphQLErrors: [new GraphQLError('Malformed query.')],
            networkError: new Error('Server not found.'),
          })
        }
      />
    );

    // error messages
    expect(screen.getByText(/malformed query/i)).toBeInTheDocument();
    expect(screen.getByText(/server not found/i)).toBeInTheDocument();
  });

  it('renders nothing if the API call is successful', () => {
    const { container } = render(
      <HandleApiResponse loading={false} error={undefined} />
    );

    expect(container).toBeEmptyDOMElement();
  });
});
