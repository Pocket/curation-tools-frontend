import React from 'react';
import { useMutation } from '@apollo/client';
import { Box, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {
  createProspectByUrl,
  CreateProspectData,
  CreateProspectVariables,
} from '../../services/mutations/createProspectByUrl';
import { Feed } from '../../services/types/Feed';
import { AddStory, AddStoryFormData } from '../../components/AddStory/AddStory';
import { Button } from '../../components/Button/Button';
import { HandleApiResponse } from '../../components/HandleApiResponse/HandleApiResponse';

const useStyles = makeStyles((theme: Theme) => ({
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
  const [createProspectMutation, { loading, error }] = useMutation<
    CreateProspectData,
    CreateProspectVariables
  >(createProspectByUrl);

  /**
   * Collect form data and send it to the API.
   *
   * @param data
   */
  const handleFormSubmit = (data: AddStoryFormData) => {
    const url = data.url;

    createProspectMutation({
      variables: {
        feedId: feed?.id ?? 'none',
        url,
      },
    })
      .then((data) => {
        // Success! Move on to the full edit form
        history.push(
          `/${feed?.name}/prospects/article/edit-and-approve/${data.data?.prospect.id}/`,
          { prospect: data.data?.prospect }
        );
      })
      .catch((error) => {
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
      <HandleApiResponse loading={loading} error={error} />
      <AddStory onSubmit={handleFormSubmit} />
    </>
  );
};
