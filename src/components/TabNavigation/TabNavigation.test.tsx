import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Tab, TabNavigation } from '../';

describe('The TabNavigation component', () => {
  it('renders successfully with the first tab selected by default', () => {
    const activeTab = '/de-DE/live/';

    render(
      <MemoryRouter initialEntries={[activeTab]}>
        <TabNavigation value={activeTab} onChange={() => true}>
          <Tab label="Live" count={222} value={activeTab} to={activeTab} />
          <Tab
            label="Scheduled"
            count={333}
            value="/de-DE/scheduled/"
            to="/de-DE/scheduled/"
          />
        </TabNavigation>
      </MemoryRouter>
    );
    const tabNavigation = screen.getByRole('tablist');
    const tabs = within(tabNavigation).getAllByRole('tab');

    expect(tabNavigation).toBeInTheDocument();
    expect(tabs.length).toEqual(2);

    tabs.forEach((tab: HTMLElement) => {
      expect(tab).toBeInTheDocument();
    });

    expect(tabs[0].getAttribute('aria-selected')).toEqual('true');
    expect(tabs[1].getAttribute('aria-selected')).toEqual('false');
  });

  it('shows selected tab in the foreground', () => {
    // second tab
    const activeTab = '/de-DE/scheduled/';

    render(
      <MemoryRouter initialEntries={[activeTab]}>
        <TabNavigation value={activeTab} onChange={() => true}>
          <Tab
            label="Live"
            count={222}
            value="/de-DE/live/"
            to="/de-DE/live/"
          />
          <Tab label="Scheduled" count={333} value={activeTab} to={activeTab} />
        </TabNavigation>
      </MemoryRouter>
    );

    const tabNavigation = screen.getByRole('tablist');
    const tabs = within(tabNavigation).getAllByRole('tab');

    expect(tabs[1].getAttribute('aria-selected')).toEqual('true');
    expect(tabs[0].getAttribute('aria-selected')).toEqual('false');
  });
});
