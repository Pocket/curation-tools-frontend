import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Grid, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  EditAndApproveStory,
  EditAndApproveStoryFormData,
  HandleApiResponse,
} from '../../components';
import { Prospect } from '../../models';
import { useApproveProspect } from '../../api';

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
  const [success, setSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  /**
   * If a Prospect object was passed to the page from one of the other app pages,
   * let's extract it from the routing.
   */
  const location = useLocation<EditAndApproveStoryPageProps>();
  const prospect = location.state?.prospect;

  // prepare "approve" mutation
  const { approveProspect, loading, error } = useApproveProspect();

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
            .then((data) => {
              // Success! Show a toast notification
              setSuccessMessage('Story approved! Redirecting...');
              setSuccess(true);
              // Go back to previous tab
              history.goBack();
            })
            .catch((error) => {
              // Do nothing. The errors are already destructured and shown on the frontend
              // Yet if a catch() statement is missing an "Unhandled rejection" will break through
            });
          break;
        case 'snooze':
          setSuccessMessage('Story snoozed for two weeks');
          setSuccess(true);
          break;
        case 'reject':
          setSuccessMessage('Story rejected');
          setSuccess(true);
          break;
      }
    }
  };

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
  const handleSuccessMessage = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
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
      <HandleApiResponse loading={loading} error={error} />
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleSuccessMessage}
        >
          <Alert
            onClose={handleSuccessMessage}
            severity="success"
            variant="filled"
          >
            {successMessage}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
