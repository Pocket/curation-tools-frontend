import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { TabPanel } from './TabPanel';

describe('The TabPanel component', () => {
  it('renders successfully', () => {
    // if value === index, this tab panel belongs to the active tab
    // and should be shown on the screen
    render(
      <TabPanel heading="Test tab" value="test-tab" index="test-tab">
        <p>Tab contents</p>
      </TabPanel>
    );

    const tabPanel = screen.getByRole('tabpanel');

    expect(tabPanel).toBeInTheDocument();
    expect(tabPanel).not.toHaveAttribute('hidden');
    expect(within(tabPanel).getByText(/tab contents/i)).toBeInTheDocument();
  });
});
