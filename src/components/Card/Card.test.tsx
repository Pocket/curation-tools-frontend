import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Prospect } from '../../models';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

describe('The Card component', () => {
  let prospect: Prospect;
  let baseUrl: string;

  beforeEach(() => {
    prospect = {
      id: '12345',
      altText: 'Test alt text',
      author: 'Just An Author',
      excerpt: 'A short description of this article',
      feedId: 'abcdefg',
      imageUrl: 'https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg',
      isLive: false,
      isRemoved: false,
      isScheduled: false,
      removalReason: null,
      publisher: 'CNN',
      source: 'CNN',
      state: 'PENDING',
      title: 'Any random title',
      topic: 'History',
      url: 'https://cnn.com/any-random-title/234567/',
    };

    baseUrl = '/en-US/prospects/123c-456b-789c/';
  });

  it('renders with image', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="pending"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    const image = screen.getByAltText(prospect.altText);
    expect(image).toBeInTheDocument();
  });

  it('renders correctly for Pending prospects', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="pending"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^reject$/i)).toBeInTheDocument();
    expect(screen.getByText(/^snooze$/i)).toBeInTheDocument();
    expect(screen.getByText(/^edit & approve$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^edit$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^remove$/i)).not.toBeInTheDocument();

    // There shouldn't be a label for pending prospects
    expect(screen.queryByText(/^pending$/i)).not.toBeInTheDocument();
  });

  it('renders correctly for Snoozed prospects', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="snoozed"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^reject$/i)).toBeInTheDocument();
    expect(screen.getByText(/^edit & approve$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^snooze$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^edit$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^remove$/i)).not.toBeInTheDocument();

    // Check the label
    expect(screen.getByText(/^snoozed$/i)).toBeInTheDocument();
  });

  it('renders correctly for Approved prospects', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="approved"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^reject$/i)).toBeInTheDocument();
    expect(screen.getByText(/^snooze$/i)).toBeInTheDocument();
    expect(screen.getByText(/^edit$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^edit & approve$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^remove$/i)).not.toBeInTheDocument();

    // Check the label
    expect(screen.getByText(/^approved$/i)).toBeInTheDocument();
  });

  it('renders correctly for Rejected prospects', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="rejected"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^snooze$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^reject$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^edit & approve$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^edit$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^remove$/i)).not.toBeInTheDocument();

    // Check the label
    expect(screen.getByText(/^rejected$/i)).toBeInTheDocument();
  });

  it('renders correctly for Live prospects', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="live"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^remove$/i)).toBeInTheDocument();
    expect(screen.getByText(/^edit$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^reject$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^snooze$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^edit & approve$/i)).not.toBeInTheDocument();

    // Check the label
    expect(screen.getByText(/^live$/i)).toBeInTheDocument();
  });

  it('renders correctly for Scheduled prospects', () => {
    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="scheduled"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^remove$/i)).toBeInTheDocument();
    expect(screen.getByText(/^edit$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^reject$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^snooze$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^edit & approve$/i)).not.toBeInTheDocument();

    // Check the label
    expect(screen.getByText(/^scheduled$/i)).toBeInTheDocument();
  });

  it('renders correctly for Removed prospects', () => {
    prospect.isRemoved = true;

    render(
      <MockedProvider>
        <MemoryRouter>
          <Card
            prospect={prospect}
            type="live"
            url={baseUrl}
            showNotification={jest.fn()}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    // buttons
    expect(screen.getByText(/^edit$/i)).toBeInTheDocument();

    expect(screen.queryByText(/^remove$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^reject$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^snooze$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^edit & approve$/i)).not.toBeInTheDocument();

    // Check the label
    expect(screen.getByText(/^removed$/i)).toBeInTheDocument();
  });
});
