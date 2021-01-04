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
      >
        <h1>Hello World!</h1>
      </HandleApiResponse>
    );

    expect(screen.getByText(/^loading data/i)).toBeInTheDocument();
  });

  it('renders an error if call to API has failed', () => {
    render(
      <HandleApiResponse
        loading={false}
        error={
          new ApolloError({
            graphQLErrors: [new GraphQLError('Malformed query.')],
            networkError: new Error('Server not found.'),
          })
        }
      >
        <h1>Hello World!</h1>
      </HandleApiResponse>
    );

    // error messages
    expect(screen.getByText(/malformed query/i)).toBeInTheDocument();
    expect(screen.getByText(/server not found/i)).toBeInTheDocument();
  });

  it('renders children elements if API call is successful', () => {
    render(
      <HandleApiResponse loading={false} error={undefined}>
        <h1>Hello World!</h1>
      </HandleApiResponse>
    );

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
