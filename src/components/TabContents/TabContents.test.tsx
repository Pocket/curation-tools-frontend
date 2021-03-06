import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TabContents } from './TabContents';
import { ProspectListData } from '../../models';
import { MockedProvider } from '@apollo/client/testing';

describe('The TabContents component', () => {
  it('renders with pagination', () => {
    const data: ProspectListData['data'] = {
      data: [
        {
          id: 'abc-123',
          altText: 'This is an image',
          author: 'Test author',
          excerpt: 'This is a short description',
          feedId: 'abc-def',
          imageUrl: 'https://test.com/image.jpeg',
          isLive: false,
          isRemoved: false,
          isScheduled: false,
          removalReason: null,
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
          feedId: 'abc-def',
          imageUrl: 'https://test.com/image2.jpeg',
          isLive: false,
          isRemoved: false,
          isScheduled: false,
          removalReason: null,
          publisher: 'Test publisher 2',
          source: 'Syndication',
          state: 'PENDING',
          title: 'Test title 2',
          topic: 'Art',
          url: 'https://test.com/test-title-2/',
        },
      ],
      meta: {
        totalResults: 512,
        currentPage: 3,
        perPage: 50,
        nextPageUrl: '/en-US/prospects/snoozed/?page=4',
        prevPageUrl: '/en-US/prospects/snoozed/?page=2',
      },
    };

    render(
      <MockedProvider>
        <MemoryRouter>
          <TabContents
            basePath="/prospects/"
            currentTab="/prospects/snoozed/"
            heading="Snoozed"
            tabPath="/prospects/snoozed/"
            type="snoozed"
            loading={false}
            error={undefined}
            data={data}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // there's a heading
    expect(screen.getByText('Snoozed')).toBeInTheDocument();

    // there are two cards with data
    expect(screen.getByText(/test title$/i)).toBeInTheDocument();
    expect(screen.getByText(/test title 2/i)).toBeInTheDocument();

    // there is a pagination widget
    expect(screen.getByText(/page 3 of 11/i)).toBeInTheDocument();
  });
});
