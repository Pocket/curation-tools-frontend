import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('The Card component', () => {
  it('renders with image', () => {
    render(
      <Card
        imageUrl="https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg"
        title="English Bulldog"
      />
    );

    const image = document.querySelector('img') as HTMLImageElement;
    expect(image.alt).toContain('English Bulldog');

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(3);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
