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
});
