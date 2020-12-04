import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Dialog } from '@material-ui/core';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 350,
      height: 70,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onBackdropClick={onClose}>
      <div className={classes.paper}>
        <CircularProgress />
        <Box p={2}>{title}</Box>
      </div>
    </Dialog>
  );
};
