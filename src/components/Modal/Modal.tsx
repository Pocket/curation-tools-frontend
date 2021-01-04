import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Box,
  CircularProgress,
  Dialog,
  DialogProps,
  Typography,
} from '@material-ui/core';

interface ModalProps {
  /**
   * A message that is shown alongside the swirly loading icon,
   * i.e. "Loading data..."
   */
  content: string;
}

/**
 * Styles for the Modal component.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 350,
      height: 70,
      boxShadow: theme.shadows[5],
    },
  })
);

/**
 * A simple "Loading..." modal with a progress icon and a text message.
 *
 * @returns JSX.Element Modal overlay over the entire screen
 */
export const Modal: React.FC<DialogProps & ModalProps> = ({
  content,
  open,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Dialog open={open} onBackdropClick={() => true}>
      <Box
        className={classes.paper}
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={2}
        px={4}
      >
        <CircularProgress />
        <Box p={2}>
          <Typography>{content}</Typography>
        </Box>
      </Box>
    </Dialog>
  );
};
