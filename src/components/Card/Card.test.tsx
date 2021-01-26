import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Prospect } from '../../services/types/Prospect';
import { MemoryRouter } from 'react-router-dom';

describe('The Card component', () => {
  it('renders with image', () => {
    const prospect: Prospect = {
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

    render(
      <MemoryRouter>
        <Card prospect={prospect} url="/en-US/prospects/123c-456b-789c/" />
      </MemoryRouter>
    );

    const image = screen.getByAltText(prospect.altText);
    expect(image).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(3);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
