import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AddStory,
  AddStoryFormData,
  Button,
  HandleApiResponse,
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

  /**
   * Go back to previous page if there is anything to go back to,
   * otherwise go to home page.
   */
  const handleCancelAction = () => {
    history.length > 1 ? history.goBack() : history.push('/');
  };

  // prepare mutation
  const { createProspect, loading, error } = useCreateProspectByUrl();

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
      .catch(() => {
        // Do nothing. The errors are already destructured and shown on the frontend
        // Yet if a catch() statement is missing an "Unhandled rejection" will break through
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
      <HandleApiResponse loading={loading} error={error} />
    </>
  );
};
