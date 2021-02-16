import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CustomTabType, TabSet } from './TabSet';

describe('The TabSet component', () => {
  it('renders successfully', () => {
    const tabs: CustomTabType[] = [
      {
        count: 222,
        label: 'Snoozed',
        pathname: '/en-US/prospects/snoozed/',
      },
    ];
    render(
      <MemoryRouter>
        <TabSet
          currentTab="/en-US/prospects/snoozed/"
          handleChange={jest.fn()}
          tabs={tabs}
        />
      </MemoryRouter>
    );

    const tab = screen.getByRole('tab');
    expect(tab).toBeInTheDocument();
    expect(tab).toHaveTextContent('Snoozed222');
  });
});
