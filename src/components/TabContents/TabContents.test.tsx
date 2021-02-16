import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TabContents } from './TabContents';
import { ProspectListData } from '../../models';

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
          publisher: 'Test publisher',
          source: 'Syndication',
          snoozedUntil: null,
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
          publisher: 'Test publisher 2',
          source: 'Syndication',
          snoozedUntil: null,
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
      <MemoryRouter>
        <TabContents
          basePath={'/prospects/snoozed/'}
          currentTab={'/prospects/snoozed/'}
          heading="Snoozed"
          type="snoozed"
          loading={false}
          error={undefined}
          data={data}
        />
      </MemoryRouter>
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
