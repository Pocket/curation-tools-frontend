import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  EditAndApproveStory,
  EditAndApproveStoryFormData,
} from './EditAndApproveStory';
import { Prospect } from '../../models';

describe('The EditAndApproveStory component', () => {
  let mockSubmit: any;
  let mockProspect: Prospect;

  beforeEach(async () => {
    mockProspect = {
      id: 'abcdefg',
      altText: 'Test alt text',
      author: 'Test author',
      excerpt: 'This is a short description',
      feedId: 'abcdefg',
      imageUrl:
        'https://assets.getpocket.com/web/yir/2020/images/mostread-1@2x.d849a2bbcf7ce894c8e5d01bc6a73052.jpg',
      isLive: false,
      isRemoved: false,
      isScheduled: false,
      removalReason: null,
      publisher: 'Test publisher',
      source: 'Test source',
      state: 'PENDING',
      title: 'Test title',
      topic: 'Business',
      url: 'https://getpocket.com',
    };

    mockSubmit = jest.fn((data: EditAndApproveStoryFormData) => {
      return Promise.resolve(data);
    });
  });

  it('renders successfully', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    // there is at least a form and nothing falls over
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('shows three action buttons for prospects yet to be approved', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    // Check that all action buttons are present - these are shown
    // for a prospect that hasn't been approved yet
    expect(screen.getByText('Reject')).toBeInTheDocument();
    expect(screen.getByText('Snooze')).toBeInTheDocument();
    expect(screen.getByText('Approve')).toBeInTheDocument();

    // The "Save" button should not be shown.
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });

  it('shows only the "Save" button if the prospect has already been approved', async () => {
    mockProspect.state = 'APPROVED';
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    expect(screen.getByText('Save')).toBeInTheDocument();

    // Do not expect to see the other three buttons
    expect(screen.queryByText('Reject')).not.toBeInTheDocument();
    expect(screen.queryByText('Snooze')).not.toBeInTheDocument();
    expect(screen.queryByText('Approve')).not.toBeInTheDocument();
  });

  it('shows basic story data', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    const storyUrlField = screen.getByLabelText('Story URL');
    expect(storyUrlField).toBeInTheDocument();
    expect(storyUrlField).toBeDisabled();

    const publisherField = screen.getByLabelText('Publisher');
    expect(publisherField).toBeInTheDocument();

    const authorField = screen.getByLabelText('Author');
    expect(authorField).toBeInTheDocument();

    expect(screen.getByLabelText('Headline')).toBeInTheDocument();
    expect(screen.getByLabelText('Excerpt')).toBeInTheDocument();
  });

  it('shows thumbnail and associated data', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    expect(screen.getByLabelText('Thumbnail URL')).toBeInTheDocument();
    expect(screen.getByLabelText('Alt Text')).toBeInTheDocument();
  });

  it('shows additional information about the story', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    const sourceField = screen.getByLabelText('Source');
    expect(sourceField).toBeInTheDocument();
    expect(sourceField).toBeDisabled();

    expect(screen.getByLabelText('Topic')).toBeInTheDocument();
    expect(screen.getByLabelText('History')).toBeInTheDocument();
  });

  it('displays errors when required fields are empty', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    userEvent.clear(screen.getByLabelText(/headline/i));
    userEvent.clear(screen.getByLabelText(/excerpt/i));
    userEvent.selectOptions(screen.getByLabelText(/topic/i), '');

    await waitFor(() => {
      userEvent.click(screen.getByText(/approve/i));
    });

    expect(screen.getByText(/please enter a title/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a short description/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/please choose a topic/i)).toBeInTheDocument();
    expect(mockSubmit).not.toBeCalled();
  });

  it('displays matching error when thumbnail URL is malformed', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    const input = screen.getByLabelText(/thumbnail url/i) as HTMLInputElement;

    userEvent.clear(input);
    userEvent.type(input, 'This is not a valid link!!!');

    await waitFor(() => {
      userEvent.click(screen.getByText(/approve/i));
    });

    expect(screen.getByText(/please enter a valid url/i)).toBeInTheDocument();
    expect(mockSubmit).not.toBeCalled();
  });

  it('proceeds with form submission if all fields are valid', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    await waitFor(() => {
      userEvent.click(screen.getByText(/approve/i));
    });

    expect(screen.queryByText(/please enter a title/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/please enter a short description/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/please choose a topic/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/please enter a valid url/i)
    ).not.toBeInTheDocument();
    expect(mockSubmit).toBeCalled();
  });

  it('shows a broken image icon if thumbnail URL is invalid', async () => {
    await waitFor(() => {
      render(
        <EditAndApproveStory prospect={mockProspect} onSubmit={mockSubmit} />
      );
    });

    const input = screen.getByLabelText(/thumbnail url/i) as HTMLInputElement;

    userEvent.clear(input);
    userEvent.type(input, 'http//:www.not-a-valid-domain$/.com/image.png');

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const thumbnailImage = document.querySelector('img') as HTMLImageElement;
    expect(thumbnailImage.src).toContain('not-a-valid-domain');
  });
});
