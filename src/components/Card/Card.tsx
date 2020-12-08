import React from 'react';
import {
  Card as MuiCard,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Button } from '../Button/Button';
import { CardText } from '../CardText/CardText';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 'auto',
      maxWidth: 500,
      padding: 10,
    },
    leftColumn: {
      width: '30%',
    },
    rightColumn: {
      width: '70%',
    },
    bottomLeftCell: {
      alignSelf: 'flex-end',
      paddingBottom: 0,
    },
    bottomRightCell: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    bottomRightButtonsContainer: {
      '& > *': {
        margin: '0 5px',
      },
    },
  })
);

interface CardProps {
  imageUrl: string;
  title: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const classes = useStyles();

  const { imageUrl, title } = props;

  return (
    <MuiCard className={classes.root}>
      <Grid container spacing={2}>
        <Grid item className={classes.leftColumn}>
          <CardMedia component="img" src={imageUrl} alt={title} />
        </Grid>
        <Grid item className={classes.rightColumn}>
          <CardText title={title} />
        </Grid>
        <Grid
          item
          className={`${classes.leftColumn} ${classes.bottomLeftCell}`}
        >
          <Typography variant="subtitle1" align="left">
            Tag 1 · Tag 2
          </Typography>
        </Grid>
        <Grid
          item
          className={`${classes.rightColumn} ${classes.bottomRightCell}`}
        >
          <div className={classes.bottomRightButtonsContainer}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disableElevation
            >
              Reject
            </Button>
            <Button variant="contained" size="small" disableElevation>
              Snooze
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              disableElevation
            >
              Edit &amp; Approve
            </Button>
          </div>
        </Grid>
      </Grid>
    </MuiCard>
  );
};
