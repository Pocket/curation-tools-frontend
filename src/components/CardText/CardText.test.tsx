import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardText, CardTextProps } from './CardText';

describe('The CardText component', () => {
  it('renders successfully', () => {
    const expectedProps: CardTextProps = {
      publisher: 'Test publisher',
      author: 'Test author',
      url: 'https://www.testnewspaper.com/article/test-title/',
      title: 'Test title',
      excerpt:
        "This is a test string that represents a short description of the article's contents.",
      label: 'Approved',
      labelColor: 'primary',
    };

    render(<CardText {...expectedProps} />);

    expect(screen.getByText(/^test publisher$/i)).toHaveTextContent(
      expectedProps.publisher
    );
    expect(screen.getByText(/^test author$/i)).toHaveTextContent(
      expectedProps.author
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', expectedProps.url);
    expect(screen.getByRole('heading')).toHaveTextContent(expectedProps.title);
    expect(screen.getByText(/test string/i)).toHaveTextContent(
      expectedProps.excerpt
    );
    expect(screen.getByText(/approved/i)).toBeInTheDocument();
  });
});
