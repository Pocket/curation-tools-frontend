import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('The Card component', () => {
  it('renders with image', () => {
    const testUrl = 'https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg';
    const testTitle = 'English Bulldog';

    render(
      <Card title={testTitle} thumbnailUrl={testUrl} altText={testTitle} />
    );

    const image = screen.getByAltText(testTitle);
    expect(image).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(3);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
