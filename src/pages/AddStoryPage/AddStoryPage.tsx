import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AddStory,
  AddStoryFormData,
  Button,
  Notification,
} from '../../components';
import { Feed } from '../../models';
import { useCreateProspectByUrl } from '../../api';

const useStyles = makeStyles(() => ({
  alignRight: {
    textAlign: 'right',
  },
}));

/**
 * Add Story page
 *
 * On this page you can submit a URL and expect it to be added
 * to the list of prospects on the Prospects tab.
 */
export const AddStoryPage = ({
  feed,
}: {
  feed: Feed | undefined;
}): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  /**
   * Go back to previous page if there is anything to go back to,
   * otherwise go to home page.
   */
  const handleCancelAction = () => {
    history.length > 1 ? history.goBack() : history.push('/');
  };

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

  // prepare mutation
  const createProspect = useCreateProspectByUrl();

  /**
   * Collect form data and send it to the API.
   *
   * @param data
   */
  const handleFormSubmit = (data: AddStoryFormData) => {
    createProspect({
      variables: {
        feedId: feed?.id ?? 'none',
        url: data.url,
      },
    })
      .then((data) => {
        // Success! Move on to the full edit form
        history.push(
          `/${feed?.name}/prospects/${data.data?.data?.id}/edit-and-approve/`,
          { prospect: data.data?.data }
        );
      })
      .catch((error: Error) => {
        showNotification(error.message, true);
      });
  };

  return (
    <>
      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" align="left">
              Add Story
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.alignRight}>
            <Button buttonType="hollow-neutral" onClick={handleCancelAction}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
      <AddStory onSubmit={handleFormSubmit} />
      <Notification
        handleClose={handleClose}
        isOpen={open}
        message={message}
        type={hasError ? 'error' : 'success'}
      />
    </>
  );
};
