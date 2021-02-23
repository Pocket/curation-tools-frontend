import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { ApiCallStates, Prospect, ProspectListData } from '../../models';
import {
  Card,
  CardProps,
  HandleApiResponse,
  Notification,
  TabPanel,
} from '../';

interface TabContentsProps {
  /**
   * The pathname of the tab to be rendered, i.e. '/prospects/snoozed/'
   */
  basePath: string;

  /**
   * The current tab's pathname, i.e. '/prospects/approved/'
   */
  currentTab: string;

  /**
   * The heading to use on the page, i.e. "Prospects" or "Approved"
   */
  heading: string;

  /**
   * The type of card to render on the tab.
   */
  type: CardProps['type'];
}

/**
 * This component generates a complete tab panel with a heading,
 * a list of prospects and a pagination widget once a call to the API
 * is complete.
 */
export const TabContents: React.FC<
  TabContentsProps & ApiCallStates & ProspectListData
> = (props): JSX.Element => {
  const { basePath, currentTab, heading, type, loading, error, data } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  /**
   * Close the toast notification
   */
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  /**
   * Show a notification to the user whether the action (such as snoozing a prospect)
   * has completed successfully.
   */
  const showNotification = (message: string, isError: boolean) => {
    setHasError(isError);
    setMessage(message);
    setOpen(true);
  };

  return (
    <TabPanel heading={heading} value={currentTab} index={basePath}>
      <Notification
        handleClose={handleClose}
        isOpen={open}
        message={message}
        type={hasError ? 'error' : 'success'}
      />

      {!data && <HandleApiResponse loading={loading} error={error} />}
      {data &&
        data.data?.map((prospect: Prospect) => {
          return (
            <Card
              key={prospect.id}
              showNotification={showNotification}
              prospect={prospect}
              type={type}
              url={`${basePath}${prospect.id}/`}
            />
          );
        })}

      {data && (
        <Grid container justify="center">
          <Grid item>
            <Button
              component={Link}
              to={data.meta.prevPageUrl}
              disabled={!data.meta.prevPageUrl}
            >
              <ChevronLeft />
            </Button>

            <Typography component="span">
              Page {data.meta.currentPage} of{' '}
              {Math.ceil(data.meta.totalResults / data.meta.perPage)}
            </Typography>

            <Button
              component={Link}
              to={data.meta.nextPageUrl}
              disabled={!data.meta.nextPageUrl}
            >
              <ChevronRight />
            </Button>
          </Grid>
        </Grid>
      )}
    </TabPanel>
  );
};
