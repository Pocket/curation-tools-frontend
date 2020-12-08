import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { TabNavigation } from './TabNavigation';
import { Tab } from '../Tab/Tab';
import userEvent from '@testing-library/user-event';

describe('The TabNavigation component', () => {
  let tabNavigation: any;
  let tabs: any;

  beforeEach(() => {
    render(
      <TabNavigation>
        <Tab label="Live" articleCount={222} />
        <Tab label="Scheduled" articleCount={333} />
      </TabNavigation>
    );
    tabNavigation = screen.getByRole('tablist');
    tabs = within(tabNavigation).getAllByRole('tab');
  });

  it('renders successfully', () => {
    expect(tabNavigation).toBeInTheDocument();
    expect(tabs.length).toEqual(2);

    tabs.forEach((tab: HTMLButtonElement) => {
      expect(tab).toBeInTheDocument();
    });
  });

  it('shows the first tab in the foreground by default', () => {
    expect(tabs[0].getAttribute('aria-selected')).toEqual('true');
    expect(tabs[1].getAttribute('aria-selected')).toEqual('false');
  });

  it('shows selected tab in the foreground', () => {
    expect(tabs[0].getAttribute('aria-selected')).toEqual('true');

    userEvent.click(tabs[1]);

    expect(tabs[1].getAttribute('aria-selected')).toEqual('true');
    expect(tabs[0].getAttribute('aria-selected')).toEqual('false');
  });
});
