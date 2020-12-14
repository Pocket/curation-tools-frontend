import React from 'react';
import { render, screen } from '@testing-library/react';
import { EditAndApproveStory } from './EditAndApproveStory';

describe('The EditAndApproveStory component', () => {
  beforeEach(() => {
    render(
      <EditAndApproveStory
        publisher="Test publisher"
        author="Test author"
        url="https://getpocket.com"
        title="Test title"
        excerpt="This is a short description."
        altText="Test alt text"
        thumbnailUrl="https://assets.getpocket.com/web/yir/2020/images/mostread-1@2x.d849a2bbcf7ce894c8e5d01bc6a73052.jpg"
        source="Syndication"
        topic="Health"
      />
    );
  });

  it('renders successfully', () => {
    // there is at least a heading and nothing falls over
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('has the requisite buttons', () => {
    // check that all action buttons are present
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Reject')).toBeInTheDocument();
    expect(screen.getByText('Snooze')).toBeInTheDocument();
    expect(screen.getByText('Approve')).toBeInTheDocument();
  });

  it('shows basic story data', () => {
    const storyUrlField = screen.getByLabelText('Story URL');
    expect(storyUrlField).toBeInTheDocument();
    expect(storyUrlField).toBeDisabled();

    const publisherField = screen.getByLabelText('Publisher');
    expect(publisherField).toBeInTheDocument();
    expect(publisherField).toBeDisabled();

    const authorField = screen.getByLabelText('Author');
    expect(authorField).toBeInTheDocument();
    expect(authorField).toBeDisabled();

    expect(screen.getByLabelText('Headline')).toBeInTheDocument();
    expect(screen.getByLabelText('Excerpt')).toBeInTheDocument();
  });

  it('shows thumbnail and associated data', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    expect(screen.getByLabelText('Thumbnail URL')).toBeInTheDocument();
    expect(screen.getByLabelText('Alt Text')).toBeInTheDocument();
  });

  it('shows additional information about the story', () => {
    const sourceField = screen.getByLabelText('Source');
    expect(sourceField).toBeInTheDocument();
    expect(sourceField).toBeDisabled();

    expect(screen.getByLabelText('Topic')).toBeInTheDocument();
    expect(screen.getByLabelText('History')).toBeInTheDocument();
  });
});
