import React from 'react';
import {
  Card as MuiCard,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Button } from '../Button/Button';
import { CardText } from '../CardText/CardText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      paddingBottom: '1rem',
      paddingTop: 0,
      border: 0,
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
    },
    leftColumn: {
      width: '30%',
    },
    rightColumn: {
      width: '70%',
    },
    image: {
      borderRadius: 4,
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
  thumbnailUrl: string;
  title: string;
  altText: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const classes = useStyles();
  const { thumbnailUrl, title, altText } = props;

  return (
    <MuiCard variant="outlined" square className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.leftColumn}>
          <CardMedia
            component="img"
            src={thumbnailUrl}
            alt={altText}
            className={classes.image}
          />
        </Grid>
        <Grid item className={classes.rightColumn}>
          <CardText title={title} />
        </Grid>
        <Grid
          item
          className={`${classes.leftColumn} ${classes.bottomLeftCell}`}
        >
          <Typography
            variant="caption"
            color="textSecondary"
            component="span"
            align="left"
          >
            Source &middot; Category
          </Typography>
        </Grid>
        <Grid
          item
          className={`${classes.rightColumn} ${classes.bottomRightCell}`}
        >
          <div className={classes.bottomRightButtonsContainer}>
            <Button buttonType="negative">Reject</Button>
            <Button buttonType="neutral">Snooze</Button>
            <Button>Edit &amp; Approve</Button>
          </div>
        </Grid>
      </Grid>
    </MuiCard>
  );
};
