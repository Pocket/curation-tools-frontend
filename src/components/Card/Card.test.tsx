import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Prospect } from '../../services/types/Prospect';

describe('The Card component', () => {
  it('renders with image', () => {
    const prospect: Prospect = {
      id: '12345',
      altText: 'Test alt text',
      author: 'Just An Author',
      category: 'History',
      excerpt: 'A short description of this article',
      imageUrl: 'https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg',
      publisher: 'CNN',
      source: 'CNN',
      title: 'Any random title',
      url: 'https://cnn.com/any-random-title/234567/',
    };

    render(<Card prospect={prospect} />);

    const image = screen.getByAltText(prospect.altText);
    expect(image).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(3);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
