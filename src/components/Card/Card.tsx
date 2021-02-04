import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card as MuiCard,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, CardText } from '../';
import { Prospect } from '../../models';

/**
 * Styles for the Card component.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      paddingBottom: '0.75rem',
      marginBottom: '2.5rem',
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
  /**
   * The Prospect object that holds all the data we need to display.
   */
  prospect: Prospect;

  /**
   * The base URL for action buttons
   */
  url: string;
}

/**
 * A custom Card component that shows a thumbnail image of a given article
 * alongside its title, excerpt, various other metadata and action buttons.
 */
export const Card: React.FC<CardProps> = (props) => {
  const classes = useStyles();
  const { prospect, url } = props;

  return (
    <MuiCard variant="outlined" square className={classes.root}>
      <Grid container spacing={2}>
        <Grid item className={classes.leftColumn}>
          <CardMedia
            component="img"
            src={prospect.imageUrl}
            alt={prospect.altText}
            className={classes.image}
          />
        </Grid>
        <Grid item className={classes.rightColumn}>
          <CardText
            author={prospect.author ?? ''}
            excerpt={prospect.excerpt ?? ''}
            publisher={prospect.publisher ?? ''}
            title={prospect.title}
            url={prospect.url}
          />
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
            {prospect.source} &middot; {prospect.topic || 'Uncategorized'}
          </Typography>
        </Grid>
        <Grid
          item
          className={`${classes.rightColumn} ${classes.bottomRightCell}`}
        >
          <div className={classes.bottomRightButtonsContainer}>
            <Button
              buttonType="negative"
              component={Link}
              to={{ pathname: `${url}reject/`, state: { prospect } }}
            >
              Reject
            </Button>
            <Button
              buttonType="neutral"
              component={Link}
              to={{ pathname: `${url}snooze/`, state: { prospect } }}
            >
              Snooze
            </Button>
            <Button
              component={Link}
              to={{ pathname: `${url}edit-and-approve/`, state: { prospect } }}
            >
              Edit &amp; Approve
            </Button>
          </div>
        </Grid>
      </Grid>
    </MuiCard>
  );
};
