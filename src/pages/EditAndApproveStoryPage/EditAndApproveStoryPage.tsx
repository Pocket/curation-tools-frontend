import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  EditAndApproveStory,
  EditAndApproveStoryFormData,
  Notification,
} from '../../components';
import { Prospect } from '../../models';
import {
  getMutationOptions,
  useApproveProspect,
  useRejectProspect,
  useSnoozeProspect,
} from '../../api';
import { FetchResult } from '@apollo/client';

const useStyles = makeStyles(() => ({
  alignRight: {
    textAlign: 'right',
  },
}));

interface EditAndApproveStoryPageProps {
  prospect?: Prospect;
}

export const EditAndApproveStoryPage: React.FC<EditAndApproveStoryPageProps> = (
  props
): JSX.Element => {
  const history = useHistory();
  const classes = useStyles();

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

  /**
   * Send the user back to the previous tab after a slight delay.
   */
  const redirectUser = (): void => {
    setTimeout(() => {
      history.goBack();
    }, 1500);
  };

  /**
   * If a Prospect object was passed to the page from one of the other app pages,
   * let's extract it from the routing.
   */
  const location = useLocation<EditAndApproveStoryPageProps>();
  const prospect = location.state?.prospect;

  // prepare mutations
  const { approveProspect } = useApproveProspect();
  const { snoozeProspect } = useSnoozeProspect();
  const { rejectProspect } = useRejectProspect();

  /**
   * Collect form data, choose action and send it off to the API
   *
   * @param formData
   */
  const handleSubmit = (formData: EditAndApproveStoryFormData) => {
    // TODO: ensure there is always a prospect on the page by loading it from the API
    // if it's not passed down from other pages
    if (prospect) {
      switch (formData.submitAction) {
        case 'approve':
          approveProspect({
            variables: {
              id: prospect.id,
              altText: formData.altText,
              excerpt: formData.excerpt,
              imageUrl: formData.imageUrl,
              publisher: formData.publisher,
              author: formData.author,
              title: formData.title,
              topic: formData.topic,
            },
          })
            .then((data: FetchResult) => {
              showNotification('Story approved! Redirecting...', false);
              redirectUser();
            })
            .catch((error: Error) => {
              showNotification(error.message, true);
            });
          break;
        case 'snooze':
          snoozeProspect(getMutationOptions(prospect, 'SNOOZED'))
            .then((data: FetchResult) => {
              showNotification('Story snoozed! Redirecting...', false);
              redirectUser();
            })
            .catch((error: Error) => {
              showNotification(error.message, true);
            });
          break;
        case 'reject':
          rejectProspect(getMutationOptions(prospect, 'REJECTED'))
            .then((data: FetchResult) => {
              showNotification('Story rejected! Redirecting...', false);
              redirectUser();
            })
            .catch((error: Error) => {
              showNotification(error.message, true);
            });
          break;
      }
    }
  };

  return (
    <>
      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" align="left">
              Edit &amp; Approve
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.alignRight}>
            <Button buttonType="hollow-neutral" onClick={handleCancelAction}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>

      {
        // TODO: load prospect from the API if page is accessed directly
        prospect && (
          <EditAndApproveStory prospect={prospect} onSubmit={handleSubmit} />
        )
      }
      <Notification
        handleClose={handleClose}
        isOpen={open}
        message={message}
        type={hasError ? 'error' : 'success'}
      />
    </>
  );
};
