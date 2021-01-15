import React from 'react';
import { ApolloError } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Modal } from '../Modal/Modal';

/**
 * Styles for the error message alert.
 */
const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
}));

interface HandleApiResponseProps {
  /**
   * Whether the app is waiting for a response from the API
   */
  loading: boolean;

  /**
   * An optional error object in case there is an error
   */
  error?: ApolloError;

  /**
   * Whether to show the loading component in a modal or inline
   */
  useModal?: boolean;

  /**
   * A message to show to the waiting user alongside the loading icon
   */
  loadingText?: string;
}

/**
 * A wrapper component that displays a loading component while the API call
 * is in progress and any errors if the API call was unsuccessful.
 *
 * @param props
 */
export const HandleApiResponse: React.FC<HandleApiResponseProps> = (
  props
): JSX.Element | null => {
  const classes = useStyles();

  const { loading, error, useModal = false, loadingText = '' } = props;

  if (loading) {
    return useModal ? (
      <Modal content={loadingText} open={true} />
    ) : (
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={7}
      >
        <CircularProgress /> {loadingText}
      </Box>
    );
  }

  if (error) {
    const { graphQLErrors, networkError, extraInfo } = error;

    let messages: string[] = [];

    if (graphQLErrors)
      messages = graphQLErrors.map(
        ({ message, locations, path }) =>
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );

    if (networkError) {
      messages.push(`[Network error]: ${networkError}`);
    }

    if (extraInfo) {
      messages.push(extraInfo);
    }

    return (
      <Box my={3}>
        <Alert severity="error" variant="filled" className={classes.root}>
          <AlertTitle className={classes.title}>Error</AlertTitle>
          {messages}
        </Alert>
      </Box>
    );
  }

  return null;
};
