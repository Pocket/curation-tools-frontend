import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface TabPanelProps {
  /**
   * The contents of the TabPanel
   */
  children: React.ReactNode;

  /**
   * The unique identifier of this tab panel, i.e. "/:feed/prospects/rejected/"
   */
  index: string;

  /**
   * The heading of the panel, i.e. "Prospects".
   */
  heading: string;

  /**
   * The value of the current tab, i.e. "/:feed/prospects/approved/.
   * If equal to index, the contents of this tab will be visible to the user.
   */
  value: string;
}

/**
 * The contents of the tab the user clicks over to. See also TabNavigation, Tab.
 */
export const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, index, heading, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box py={3}>
          <Box pb={3}>
            <Typography variant="h4" component="h1">
              {heading}
            </Typography>
          </Box>
          {children}
        </Box>
      )}
    </div>
  );
};
