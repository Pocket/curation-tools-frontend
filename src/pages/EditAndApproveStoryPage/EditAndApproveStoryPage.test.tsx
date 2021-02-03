import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloError } from '@apollo/client';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditAndApproveStoryPage } from './EditAndApproveStoryPage';
import { Prospect, ApproveProspectVariables } from '../../models';
import { ApproveProspectDocument } from '../../api/aws-appsync/generatedTypes';

describe('The Edit And Approve Story page', () => {
  let history: any;
  let mockProspect: Prospect;

  beforeEach(() => {
    mockProspect = {
      id: '123a-456b-789c',
      altText: 'Test alt text',
      author: 'Test author',
      excerpt: 'This is a short description',
      feedId: 'abcdefg',
      imageUrl:
        'https://assets.getpocket.com/web/yir/2020/images/mostread-1@2x.d849a2bbcf7ce894c8e5d01bc6a73052.jpg',
      publisher: 'Test publisher',
      snoozedUntil: null,
      source: 'Test source',
      title: 'Test title',
      topic: 'Business',
      url: 'https://getpocket.com',
    };

    // create a custom location history so that we can add the prospect
    // to location state
    history = createMemoryHistory();
    // start on the Snoozed tab
    history.push('/en-US/prospects/snoozed/');
    // click "Edit & Approve" button on a prospect card and pass the prospect along
    history.push('/en-US/prospects/123a-456b-789c/edit-and-approve/', {
      prospect: mockProspect,
    });
  });

  it('shows an error if the API call was unsuccessful', async () => {
    const mocksWithError = [
      {
        request: {
          query: ApproveProspectDocument,
          variables: {
            id: 'abcdefg',
            altText: 'Alt text',
            author: 'John Citizen',
            excerpt: 'A very short description',
            imageUrl: 'http://www.test.com/image.svg',
            publisher: 'CNN',
            title: 'Updated Prospect',
            topic: 'Business',
          } as ApproveProspectVariables,
        },
        error: new ApolloError({
          networkError: new Error('An error occurred.'),
        }),
      },
    ];

    render(
      <MockedProvider mocks={mocksWithError} addTypename={false}>
        <Router history={history}>
          <EditAndApproveStoryPage />
        </Router>
      </MockedProvider>
    );

    // wait for form validation to complete
    await waitFor(() => {
      userEvent.click(screen.getByText(/^approve$/i));
    });

    // wait for the API
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // get response
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('shows a success message if prospect was successfully approved', async () => {
    const approvedProspect = mockProspect;
    approvedProspect.altText = 'Updated alt text';
    approvedProspect.excerpt = 'Updated excerpt';
    approvedProspect.title = 'Approved Prospect';

    const mocks = [
      {
        request: {
          query: ApproveProspectDocument,
          variables: {
            id: approvedProspect.id,
            altText: approvedProspect.altText,
            author: approvedProspect.author,
            excerpt: approvedProspect.excerpt,
            imageUrl: approvedProspect.imageUrl,
            publisher: approvedProspect.publisher,
            title: approvedProspect.title,
            topic: approvedProspect.topic,
          } as ApproveProspectVariables,
        },
        result: {
          data: {
            data: approvedProspect as Prospect,
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router history={history}>
          <EditAndApproveStoryPage />
        </Router>
      </MockedProvider>
    );

    // wait for form validation to complete
    await waitFor(() => {
      userEvent.click(screen.getByText(/^approve$/i));
    });

    // wait for the API
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // see a success message
    expect(screen.getByText(/story approved/i)).toBeInTheDocument();

    // go back to previous tab on success
    expect(history.location.pathname).toEqual('/en-US/prospects/snoozed/');
  });

  describe('when Cancel button is clicked', () => {
    it('it goes back to the previous page', () => {
      history = createMemoryHistory({
        initialEntries: [
          '/en-US/prospects/',
          '/en-US/prospects/123a-456b-789c/edit-and-approve/',
        ],
        initialIndex: 1,
      });

      render(
        <MockedProvider>
          <Router history={history}>
            <EditAndApproveStoryPage />
          </Router>
        </MockedProvider>
      );

      userEvent.click(screen.getByText('Cancel'));

      expect(history.location.pathname).toEqual('/en-US/prospects/');
    });

    it('it goes to home page if there is no browsing history', () => {
      history = createMemoryHistory({
        initialEntries: ['/en-US/prospects/123a-456b-789c/edit-and-approve/'],
        initialIndex: 0,
      });

      render(
        <MockedProvider>
          <Router history={history}>
            <EditAndApproveStoryPage />
          </Router>
        </MockedProvider>
      );

      userEvent.click(screen.getByText('Cancel'));

      expect(history.location.pathname).toEqual('/');
    });
  });
});
