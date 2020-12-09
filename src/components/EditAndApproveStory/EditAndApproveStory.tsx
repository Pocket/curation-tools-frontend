import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardMedia,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Switch,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { Button } from '../Button/Button';

const useStyles = makeStyles((theme: Theme) => ({
  alignRight: {
    textAlign: 'right',
  },
  greyLink: {
    color: theme.palette.grey[600],
  },
}));

export interface EditAndApproveStoryProps {
  /**
   * The name of the publisher
   */
  publisher: string;
  /**
   * The name of the author
   */
  author: string;
  /**
   * The URL of the story
   */
  url: string;
  /**
   * The title of the story
   */
  title: string;
  /**
   * A short summary of the story
   */
  excerpt: string;

  /**
   * Alternative text for the thumbnail image
   */
  altText: string;

  /**
   * The URL of the thumbnail image
   */
  thumbnailUrl: string;

  /**
   * The source of the story, i.e. "Syndication"
   */
  source: string;

  /**
   * The topic of the story, i.e. "History"
   */
  topic: string;
}

/**
 * A pre-filled form that displays information about a story
 * and allows editing some of the fields before submitting it.
 *
 * @param props: EditAndApproveStoryProps
 * @returns JSX.Element The rendered form
 */
export const EditAndApproveStory = (
  props: EditAndApproveStoryProps
): JSX.Element => {
  const classes = useStyles();

  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" component="h1" align="left">
            Edit &amp; Approve
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.alignRight}>
          <Button buttonType="hollow-neutral">Cancel</Button>
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              disabled
              id="story-url"
              name="story-url"
              InputLabelProps={{
                shrink: true,
              }}
              label="Story URL"
              fullWidth
              variant="outlined"
              value={props.url}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              id="publisher"
              name="publisher"
              label="Publisher"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={props.publisher}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              id="author"
              name="author"
              label="Author"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={props.author}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              InputLabelProps={{
                shrink: true,
              }}
              label="Headline"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
              value={props.title}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="excerpt"
              name="excerpt"
              InputLabelProps={{
                shrink: true,
              }}
              label="Excerpt"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
              value={props.excerpt}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                image={props.thumbnailUrl}
                title="Test image"
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="alt-text"
              name="alt-text"
              label="Alt Text"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              multiline
              rows={8}
              variant="outlined"
              value={props.altText}
            />
            <FormHelperText>
              <a className={classes.greyLink} href="https://getpocket.com/">
                Learn how to write alt text
              </a>
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="thumbnail-url"
              name="thumbnail-url"
              label="Thumbnail URL"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={props.thumbnailUrl}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              disabled
              id="source"
              name="source"
              label="Source"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={props.source}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="topic"
              name="topic"
              select
              value="0"
              label="Topic"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            >
              <MenuItem key="0" value="0">
                Health
              </MenuItem>
              <MenuItem key="1" value="1">
                Art
              </MenuItem>
              <MenuItem key="2" value="2">
                Languages
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="history"
              name="history"
              InputLabelProps={{
                shrink: true,
              }}
              label="History"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} className={classes.alignRight}>
            <FormControlLabel
              value="prioritize"
              control={<Switch color="primary" />}
              label="Prioritize this story"
              labelPlacement="start"
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} className={classes.alignRight}>
            <Box display="inline">
              <Button buttonType="negative">Reject</Button>
            </Box>

            <Box display="inline" ml={1}>
              <Button buttonType="neutral">Snooze</Button>
            </Box>

            <Box display="inline" ml={1}>
              <Button>Approve</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};

EditAndApproveStory.propTypes = {
  publisher: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};
