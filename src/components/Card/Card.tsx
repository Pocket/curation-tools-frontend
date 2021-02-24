import React from 'react';
import { Link } from 'react-router-dom';
import { FetchResult } from '@apollo/client';
import {
  Card as MuiCard,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, CardText } from '../';
import { Prospect } from '../../models';
import {
  getMutationOptions,
  useRejectProspect,
  useSnoozeProspect,
} from '../../api';

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
    image: {
      borderRadius: 4,
    },
    bottomRightCell: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      bottomRightCell: {
        justifyContent: 'flex-start',
        '& > *': {
          marginRight: '0.625rem',
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      bottomRightCell: {
        justifyContent: 'flex-end',
        '& > *': {
          marginLeft: '0.625rem',
        },
      },
    },
  })
);

export interface CardProps {
  showNotification: (message: string, isError: boolean) => void;

  /**
   * The Prospect object that holds all the data we need to display.
   */
  prospect: Prospect;

  /**
   * The base URL for action buttons
   */
  url: string;

  /**
   * What type of prospect this card is used to display (used to work out
   * which action buttons need to be shown alongside the prospect info).
   */
  type: 'pending' | 'snoozed' | 'approved' | 'rejected' | 'live' | 'scheduled';
}

/**
 * A custom Card component that shows a thumbnail image of a given article
 * alongside its title, excerpt, various other metadata and action buttons.
 */
export const Card: React.FC<CardProps> = (props) => {
  const classes = useStyles();
  const { showNotification, prospect, type, url } = props;

  let labelColor: 'default' | 'primary' | 'secondary' = 'primary';

  if (type === 'snoozed') {
    labelColor = 'default';
  } else if (type === 'rejected') {
    labelColor = 'secondary';
  }

  // prepare mutations
  const { snoozeProspect } = useSnoozeProspect();
  const { rejectProspect } = useRejectProspect();

  /**
   * Snooze a prospect displayed in this card
   */
  const handleSnooze = () => {
    snoozeProspect({
      variables: { id: prospect.id },
      ...getMutationOptions(prospect, 'SNOOZED'),
    })
      .then((data: FetchResult) => {
        showNotification('Story snoozed', false);
      })
      .catch((error: Error) => {
        showNotification(error.message, true);
      });
  };

  /**
   * Reject a prospect displayed in this card
   */
  const handleReject = () => {
    rejectProspect({
      variables: { id: prospect.id },
      ...getMutationOptions(prospect, 'REJECTED'),
    })
      .then((data: FetchResult) => {
        showNotification('Story rejected', false);
      })
      .catch((error: Error) => {
        showNotification(error.message, true);
      });
  };

  return (
    <MuiCard variant="outlined" square className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            src={prospect.imageUrl}
            alt={prospect.altText}
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardText
            author={prospect.author ?? ''}
            excerpt={prospect.excerpt ?? ''}
            publisher={prospect.publisher ?? ''}
            title={prospect.title}
            url={prospect.url}
            label={type === 'pending' ? null : type}
            labelColor={labelColor}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="caption"
            color="textSecondary"
            component="span"
            align="left"
          >
            {prospect.source} &middot; {prospect.topic || 'Uncategorized'}
          </Typography>
        </Grid>
        <Grid item className={classes.bottomRightCell} xs={12} sm={6}>
          {['pending', 'snoozed', 'approved'].includes(type) && (
            <Button buttonType="negative" onClick={handleReject}>
              Reject
            </Button>
          )}
          {['pending', 'approved', 'rejected'].includes(type) && (
            <Button buttonType="neutral" onClick={handleSnooze}>
              Snooze
            </Button>
          )}
          {['live', 'scheduled'].includes(type) && (
            <Button buttonType="negative">Remove</Button>
          )}
          {['pending', 'snoozed'].includes(type) && (
            <Button
              component={Link}
              to={{
                pathname: `${url}edit-and-approve/`,
                state: { prospect },
              }}
            >
              Edit &amp; Approve
            </Button>
          )}
          {['approved', 'live', 'scheduled'].includes(type) && (
            <Button
              buttonType="neutral"
              component={Link}
              to={{ pathname: `${url}edit/`, state: { prospect } }}
            >
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
    </MuiCard>
  );
};
