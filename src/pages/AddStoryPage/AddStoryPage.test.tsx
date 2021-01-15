import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloError } from '@apollo/client';
import { render, fireEvent, screen, act } from '@testing-library/react';

import { AddStoryPage } from './AddStoryPage';
import { Feed } from '../../services/types/Feed';
import {
  createProspectByUrl,
  CreateProspectData,
  CreateProspectVariables,
} from '../../services/mutations/createProspectByUrl';

describe('The AddStory page', () => {
  let mockFeed: Feed;
  let testUrl: string;

  beforeEach(() => {
    mockFeed = { id: 'abc', name: 'en-US' };
    testUrl = 'https://www.mozilla.org/en-US/';
  });

  it('shows an error if the API call was unsuccessful', async () => {
    const mocksWithError = [
      {
        request: {
          query: createProspectByUrl,
          variables: {
            feedId: mockFeed.id,
            url: testUrl,
          } as CreateProspectVariables,
        },
        error: new ApolloError({
          networkError: new Error('An error occurred.'),
        }),
      },
    ];

    render(
      <MockedProvider mocks={mocksWithError} addTypename={false}>
        <AddStoryPage feed={mockFeed} />
      </MockedProvider>
    );

    // fill out the form
    const input = screen.getByLabelText(/story url/i) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: testUrl },
    });

    // submit it
    fireEvent.click(screen.getByText(/parse/i));

    // wait for the API
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // get response
    expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
  });

  it('redirects to Edit & Approve form if prospect was successfully added', async () => {
    const newProspectId = 'abcdefg-jkl-mnop';

    const mocks = [
      {
        request: {
          query: createProspectByUrl,
          variables: {
            feedId: mockFeed.id,
            url: testUrl,
          } as CreateProspectVariables,
        },
        result: {
          data: {
            prospect: {
              id: newProspectId,
            },
          } as CreateProspectData,
        },
      },
    ];

    const history = createMemoryHistory({
      initialEntries: ['/en-US/prospects/article/add/'],
      initialIndex: 0,
    });

    render(
      <MockedProvider mocks={mocks}>
        <Router history={history}>
          <AddStoryPage feed={mockFeed} />
        </Router>
      </MockedProvider>
    );

    // fill out the form
    const input = screen.getByLabelText(/story url/i) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: testUrl },
    });

    // submit it
    fireEvent.click(screen.getByText(/parse/i));

    // wait for the API
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // redirect to the Edit & Approve form on success
    expect(history.location.pathname).toEqual(
      `/en-US/prospects/article/edit-and-approve/${newProspectId}/`
    );
  });

  describe('when Cancel button is clicked', () => {
    it('goes back to the previous page', () => {
      const history = createMemoryHistory({
        initialEntries: [
          '/en-US/newtab/live/',
          '/en-US/prospects/',
          '/en-US/prospects/article/add/',
        ],
        initialIndex: 2,
      });

      render(
        <MockedProvider>
          <Router history={history}>
            <AddStoryPage feed={mockFeed} />
          </Router>
        </MockedProvider>
      );

      const cancelButton = screen.getByText('Cancel');
      fireEvent.click(cancelButton);

      expect(history.location.pathname).toEqual('/en-US/prospects/');
    });

    it('goes to home page if there is no browsing history', () => {
      const history = createMemoryHistory({
        initialEntries: ['/en-US/prospects/article/add/'],
        initialIndex: 0,
      });

      render(
        <MockedProvider>
          <Router history={history}>
            <AddStoryPage feed={mockFeed} />
          </Router>
        </MockedProvider>
      );

      const cancelButton = screen.getByText('Cancel');
      fireEvent.click(cancelButton);

      expect(history.location.pathname).toEqual('/');
    });
  });
});
