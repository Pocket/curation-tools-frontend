import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Styles for the error message alert.
 */
const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
}));

interface NotificationProps {
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;

  /**
   * Toggle whether to show the notification or not.
   */
  isOpen: boolean;

  /**
   * The message to show to the user, i.e. "Prospect snoozed".
   */
  message: string;

  /**
   * The type of alert to display.
   */
  type: 'error' | 'success';
}

/**
 * Show a toast message on completing an action (i.e., snoozing or rejecting a prospect).
 *
 * The message will either be a "Success" alert with a bright green background
 * or an "Error" alert with a red background.
 */
export const Notification: React.FC<NotificationProps> = (
  props
): JSX.Element => {
  const { handleClose, isOpen, message, type } = props;

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={type === 'error' ? undefined : 2000}
      onClose={handleClose}
    >
      <Alert
        classes={useStyles()}
        severity={type}
        variant="filled"
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
