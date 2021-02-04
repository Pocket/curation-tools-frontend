import React from 'react';
import {
  Box,
  CircularProgress,
  Dialog,
  DialogProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

interface ModalProps {
  /**
   * A message that is shown alongside the swirly loading icon,
   * i.e. "Loading data..."
   */
  content: string;
}

/**
 * A simple "Loading..." modal with a progress icon and a text message.
 *
 * @returns JSX.Element Modal overlay over the entire screen
 */
export const Modal: React.FC<DialogProps & ModalProps> = ({
  content,
  open,
}): JSX.Element => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={open} onBackdropClick={() => true} fullScreen={fullScreen}>
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={3}
        px={9}
      >
        <CircularProgress />
        <Box p={2}>
          <Typography>{content}</Typography>
        </Box>
      </Box>
    </Dialog>
  );
};
