import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Grid, Snackbar, Typography } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  EditAndApproveStory,
  EditAndApproveStoryFormData,
} from '../../components/EditAndApproveStory/EditAndApproveStory';
import { Button } from '../../components/Button/Button';
import { Prospect } from '../../services/types/Prospect';
import {
  approveProspect,
  ApproveProspectData,
  ApproveProspectVariables,
} from '../../services/mutations/approveProspect';
import { HandleApiResponse } from '../../components/HandleApiResponse/HandleApiResponse';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) => ({
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
  const [approveProspectMutation, { loading, error }] = useMutation<
    ApproveProspectData,
    ApproveProspectVariables
  >(approveProspect);

  /**
   * Collect form data, choose action and send it off to the API
   *
   * @param data
   */
  const handleSubmit = (data: EditAndApproveStoryFormData) => {
    // TODO: ensure there is always a prospect on the page by loading it from the API
    // if it's not passed down from other pages
    if (prospect) {
      switch (data.submitAction) {
        case 'approve':
          approveProspectMutation({
            variables: {
              id: prospect.id,
              altText: data.altText,
              excerpt: data.excerpt,
              imageUrl: data.imageUrl,
              publisher: data.publisher,
              title: data.title,
              topic: data.topic,
            },
          })
            .then((data) => {
              // Success! Show a toast notification
              setSuccessMessage('Story approved!');
              setSuccess(true);
              // go back to previous tab
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
