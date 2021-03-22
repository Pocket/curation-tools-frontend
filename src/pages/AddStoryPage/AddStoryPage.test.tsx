import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloError } from '@apollo/client';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddStoryPage } from './AddStoryPage';
import { Feed, Prospect, CreateProspectVariables } from '../../models';
import { CreateProspectByUrlDocument } from '../../api/aws-appsync/generatedTypes';

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
          query: CreateProspectByUrlDocument,
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
    userEvent.clear(input);
    userEvent.type(input, testUrl);

    // submit it
    userEvent.click(screen.getByText(/parse/i));

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
          query: CreateProspectByUrlDocument,
          variables: {
            feedId: mockFeed.id,
            url: testUrl,
          } as CreateProspectVariables,
        },
        result: {
          data: {
            data: {
              id: newProspectId,
              altText: 'Test alt text',
              author: 'Test author',
              excerpt: 'This is a short description',
              feedId: 'abcdefg',
              imageUrl:
                'https://assets.getpocket.com/web/yir/2020/images/mostread-1@2x.d849a2bbcf7ce894c8e5d01bc6a73052.jpg',
              publisher: 'Test publisher',
              source: 'Test source',
              state: 'PENDING',
              title: 'Test title',
              topic: 'Business',
              url: 'https://getpocket.com',
            } as Prospect,
          },
        },
      },
    ];

    const history = createMemoryHistory({
      initialEntries: ['/en-US/prospects/add/'],
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
    userEvent.clear(input);
    userEvent.type(input, testUrl);

    // submit it
    userEvent.click(screen.getByText(/parse/i));

    // wait for the API
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // redirect to the Edit & Approve form on success
    expect(history.location.pathname).toEqual(
      `/en-US/prospects/${newProspectId}/edit-and-approve/`
    );
  });

  describe('when Cancel button is clicked', () => {
    it('goes back to the previous page', () => {
      const history = createMemoryHistory({
        initialEntries: [
          '/en-US/newtab/live/',
          '/en-US/prospects/',
          '/en-US/prospects/add/',
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

      userEvent.click(screen.getByText('Cancel'));

      expect(history.location.pathname).toEqual('/en-US/prospects/');
    });

    it('goes to home page if there is no browsing history', () => {
      const history = createMemoryHistory({
        initialEntries: ['/en-US/prospects/add/'],
        initialIndex: 0,
      });

      render(
        <MockedProvider>
          <Router history={history}>
            <AddStoryPage feed={mockFeed} />
          </Router>
        </MockedProvider>
      );

      userEvent.click(screen.getByText('Cancel'));

      expect(history.location.pathname).toEqual('/');
    });
  });
});
