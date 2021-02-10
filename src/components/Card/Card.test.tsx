import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Prospect } from '../../models';
import { MemoryRouter } from 'react-router-dom';

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
      publisher: 'CNN',
      source: 'CNN',
      snoozedUntil: null,
      title: 'Any random title',
      topic: 'History',
      url: 'https://cnn.com/any-random-title/234567/',
    };

    baseUrl = '/en-US/prospects/123c-456b-789c/';
  });

  it('renders with image', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="pending" url={baseUrl} />
      </MemoryRouter>
    );

    const image = screen.getByAltText(prospect.altText);
    expect(image).toBeInTheDocument();
  });

  it('renders correctly for Pending prospects', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="pending" url={baseUrl} />
      </MemoryRouter>
    );

    // buttons
    expect(screen.getByText(/reject/i)).toBeInTheDocument();
    expect(screen.getByText(/snooze/i)).toBeInTheDocument();
    expect(screen.getByText(/edit & approve/i)).toBeInTheDocument();
  });

  it('renders correctly for Snoozed prospects', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="snoozed" url={baseUrl} />
      </MemoryRouter>
    );

    // buttons
    expect(screen.getByText(/reject/i)).toBeInTheDocument();
    expect(screen.getByText(/edit & approve/i)).toBeInTheDocument();
  });

  it('renders correctly for Approved prospects', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="approved" url={baseUrl} />
      </MemoryRouter>
    );

    // buttons
    expect(screen.getByText(/reject/i)).toBeInTheDocument();
    expect(screen.getByText(/snooze/i)).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });

  it('renders correctly for Rejected prospects', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="rejected" url={baseUrl} />
      </MemoryRouter>
    );

    // buttons
    expect(screen.getByText(/snooze/i)).toBeInTheDocument();
  });

  it('renders correctly for Live prospects', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="live" url={baseUrl} />
      </MemoryRouter>
    );

    // buttons
    expect(screen.getByText(/remove/i)).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });

  it('renders correctly for Scheduled prospects', () => {
    render(
      <MemoryRouter>
        <Card prospect={prospect} type="scheduled" url={baseUrl} />
      </MemoryRouter>
    );

    // buttons
    expect(screen.getByText(/remove/i)).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });
});
