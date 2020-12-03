import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { AddStory } from './AddStory';

describe('The AddStory component', () => {
  render(<AddStory />);
  const input = screen.getByLabelText(/^Story URL$/i) as HTMLInputElement;

  it('renders successfully', () => {
    expect(input).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it('updates the URL on change', () => {
    const testUrl = 'https://www.mozilla.org/en-US/';

    fireEvent.change(input, {
      target: { value: testUrl },
    });

    expect(input).toHaveValue(testUrl);
  });
});
