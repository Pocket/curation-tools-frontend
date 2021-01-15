import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { AddStory } from './AddStory';

describe('The AddStory component', () => {
  let mockSubmit: any;
  let testUrl: any;

  beforeEach(() => {
    mockSubmit = jest.fn((url) => {
      return Promise.resolve({ url });
    });

    testUrl = 'https://www.mozilla.org/en-US/';
  });

  it('renders successfully', async () => {
    await waitFor(() => {
      render(<AddStory onSubmit={mockSubmit} />);
    });

    const input = screen.getByLabelText(/story url/i) as HTMLInputElement;
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('updates the URL on change', async () => {
    await waitFor(() => {
      render(<AddStory onSubmit={mockSubmit} />);
    });

    const input = screen.getByLabelText(/story url/i) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: testUrl },
    });

    expect(input).toHaveValue(testUrl);
  });

  it('should display required error when no URL is supplied', async () => {
    await waitFor(() => {
      render(<AddStory onSubmit={mockSubmit} />);
    });

    await waitFor(() => {
      fireEvent.submit(screen.getByRole('form'));
    });

    expect(await screen.getByText(/please enter a url/i)).toBeInTheDocument();
    expect(mockSubmit).not.toBeCalled();
  });

  it('should display matching error when URL is malformed', async () => {
    await waitFor(() => {
      render(<AddStory onSubmit={mockSubmit} />);
    });

    await waitFor(() => {
      const input = screen.getByLabelText(/story url/i) as HTMLInputElement;

      fireEvent.input(input, {
        target: {
          value: 'test link',
        },
      });

      fireEvent.submit(screen.getByRole('form'));
    });

    expect(
      await screen.getByText(/please enter a valid url/i)
    ).toBeInTheDocument();
    expect(mockSubmit).not.toBeCalled();
  });

  it('should proceed with form submission if URL is valid', async () => {
    await waitFor(() => {
      render(<AddStory onSubmit={mockSubmit} />);
    });

    await waitFor(() => {
      const input = screen.getByLabelText(/story url/i) as HTMLInputElement;

      fireEvent.input(input, {
        target: {
          value: testUrl,
        },
      });

      fireEvent.submit(screen.getByRole('form'));
    });

    expect(screen.queryByText(/please enter a url/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/please enter a valid url/i)
    ).not.toBeInTheDocument();
    expect(mockSubmit).toBeCalled();
  });
});
