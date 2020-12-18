import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('The Header component', () => {
  it('renders successfully', () => {
    render(
      <BrowserRouter>
        <Header feed="de_DE" />
      </BrowserRouter>
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
    let feed = 'en_US';

    const { rerender } = render(
      <BrowserRouter>
        <Header feed={feed} />
      </BrowserRouter>
    );

    const newTabLink = screen.getByText('New Tab').closest('a');
    const prospectsLink = screen.getByText('Prospects').closest('a');
    const addStoryLink = screen.getByText('Add Story').closest('a');

    expect(newTabLink).toHaveAttribute('href', expect.stringContaining(feed));
    expect(prospectsLink).toHaveAttribute(
      'href',
      expect.stringContaining(feed)
    );
    expect(addStoryLink).toHaveAttribute('href', expect.stringContaining(feed));

    feed = 'de_DE';

    rerender(
      <BrowserRouter>
        <Header feed={feed} />
      </BrowserRouter>
    );

    expect(newTabLink).toHaveAttribute('href', expect.stringContaining(feed));
    expect(prospectsLink).toHaveAttribute(
      'href',
      expect.stringContaining(feed)
    );
    expect(addStoryLink).toHaveAttribute('href', expect.stringContaining(feed));
  });
});
