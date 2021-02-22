import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchResult } from '@apollo/client';
import {
  Card as MuiCard,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, CardText } from '../';
import { Prospect } from '../../models';
import {
  getRefetchParams,
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
  const { prospect, type, url } = props;

  let labelColor: 'default' | 'primary' | 'secondary' = 'primary';

  if (type === 'snoozed') {
    labelColor = 'default';
  } else if (type === 'rejected') {
    labelColor = 'secondary';
  }

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showCard, setShowCard] = useState<boolean>(true);

  /**
   * Close the toast notification
   */
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // prepare mutations
  const { snoozeProspect } = useSnoozeProspect();
  const { rejectProspect } = useRejectProspect();

  /**
   * Snooze a prospect with the specified ID
   */
  const handleSnooze = () => {
    snoozeProspect({
      variables: { id: prospect.id },
      refetchQueries: getRefetchParams(prospect.feedId),
    })
      .then((data: FetchResult) => {
        // Success! Inform the user in a toast message
        setOpen(true);
        setMessage('Prospect snoozed');

        // Hide the card from the list
        setShowCard(false);
      })
      .catch((error) => {
        // Something went wrong - inform the user, too
        setOpen(true);
        setMessage(error.message);
      });
  };

  /**
   * Reject a prospect with the specified ID
   */
  const handleReject = () => {
    rejectProspect({
      variables: { id: prospect.id },
      refetchQueries: getRefetchParams(prospect.feedId),
    })
      .then((data) => {
        // Success! Inform the user in a toast message
        setOpen(true);
        setMessage('Prospect rejected');

        // Hide the card from the list
        setShowCard(false);
      })
      .catch((error) => {
        // Something went wrong - inform the user, too
        setOpen(true);
        setMessage(error.message);
      });
  };

  return (
    <Collapse in={showCard} timeout={3000}>
      <MuiCard variant="outlined" square className={classes.root}>
        {open && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={<Typography>{message}</Typography>}
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
          />
        )}

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
    </Collapse>
  );
};
