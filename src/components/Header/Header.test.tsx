import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
import { Feed } from '../../services/types/Feed';

describe('The Header component', () => {
  const feed: Feed = { id: 'abcdefg', name: 'en-US' };

  it('renders successfully', () => {
    render(
      <MemoryRouter>
        <Header feed={feed} />
      </MemoryRouter>
    );

    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toEqual(2);

    tabs.forEach((tab) => {
      expect(tab).toBeInTheDocument();
    });
  });
  it('forms URLs correctly', () => {
    render(
      <MemoryRouter initialEntries={[`/${feed.name}/newtab/`]}>
        <Header feed={feed} />
      </MemoryRouter>
    );

    const newTabLink = screen.getByText('New Tab').closest('a');
    const prospectsLink = screen.getByText('Prospects').closest('a');
    const addStoryLink = screen.getByText('Add Story').closest('a');

    expect(newTabLink).toHaveAttribute(
      'href',
      expect.stringContaining(feed.name)
    );
    expect(prospectsLink).toHaveAttribute(
      'href',
      expect.stringContaining(feed.name)
    );
    expect(addStoryLink).toHaveAttribute(
      'href',
      expect.stringContaining(feed.name)
    );
  });
});
