import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  Select,
  Switch,
  TextField,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Button } from '../';
import { Prospect } from '../../models';
import { VALID_URL_REGEX } from '../../constants';

const useStyles = makeStyles((theme: Theme) => ({
  alignRight: {
    textAlign: 'right',
  },
  greyLink: {
    color: theme.palette.grey[600],
  },
  thumbnail: {
    maxHeight: 200,
  },
  formControl: {
    width: '100%',
  },
}));

export interface EditAndApproveStoryProps {
  /**
   * The Prospect object that holds most of the data we need to display.
   */
  prospect: Prospect;

  /**
   * The submit handler passed to this component receives form data as a prop.
   *
   * @param data
   */
  onSubmit: (data: EditAndApproveStoryFormData) => void;
}

export interface EditAndApproveStoryFormData {
  /**
   * The alt-text property for the thumbnail image
   */
  altText: string;

  /**
   * The name of the author
   */
  author: string;

  /**
   * A short description of the article
   */
  excerpt: string;

  /**
   * The URL for the thumbnail image that will accompany the published story
   */
  imageUrl: string;

  /**
   * Whether to schedule this story to appear ahead of other stories already
   * queued up in the "Scheduled" tab
   */
  prioritizeStory: boolean;

  /**
   * The name of the publisher, i.e. 'CNN'
   */
  publisher: string;

  /**
   * The state of the prospect, i.e. 'SNOOZED'
   */
  state: string;

  /**
   * The title of the article ("headline" on the frontend)
   */
  title: string;

  /**
   * The topic this article most closely fits into
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
export const EditAndApproveStory: React.FC<EditAndApproveStoryProps> = (
  props
): JSX.Element => {
  const classes = useStyles();
  const { onSubmit } = props;
  const [prospect, setProspect] = useState<Prospect>(props.prospect);
  const [imageUrl, setImageUrl] = useState<string>(prospect.imageUrl);
  const {
    handleSubmit,
    register,
    errors,
  } = useForm<EditAndApproveStoryFormData>();

  /**
   * Update form field values on change.
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name = event.target.name as keyof typeof prospect;

    setProspect({
      ...prospect,
      [name]: event.target.value,
    });
  };

  /**
   * When thumbnail URL is edited, give instant feedback on the page
   * whether the image resolves or not.
   *
   * @param event
   */
  const updateThumbnail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // update thumbnail URL both in the form and on the page
    setImageUrl(event.target.value);

    // update prospect data as well
    handleChange(event);
  };

  /**
   * Show a Material-UI broken image icon if the thumbnail URL
   * is missing or invalid.
   *
   * @param event
   */
  const handleMissingThumbnail = (
    event: React.SyntheticEvent<HTMLImageElement>
  ): void => {
    event.currentTarget.src = '/brokenImage.svg';
  };

  /**
   * Handle updates to topic select separately as event signatures
   * for input and select elements do not match.
   *
   * @param event
   */
  const handleTopicChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ): void => {
    const name = event.target.name as keyof typeof prospect;

    setProspect({
      ...prospect,
      [name]: event.target.value,
    });
  };

  /**
   * Append prospect state to form data when snoozing a prospect.
   */
  const onSnooze = handleSubmit((data: EditAndApproveStoryFormData): void => {
    data.state = 'SNOOZED';
    onSubmit(data);
  });

  /**
   * Append prospect state to form data when rejecting a prospect.
   */
  const onReject = handleSubmit((data: EditAndApproveStoryFormData): void => {
    data.state = 'REJECTED';
    onSubmit(data);
  });

  /**
   * Append prospect state to form data when approving a prospect.
   */
  const onApprove = handleSubmit((data: EditAndApproveStoryFormData): void => {
    data.state = 'APPROVED';
    onSubmit(data);
  });

  /**
   * Append prospect state to form data; no need to update - the "Save" button is used
   * to save changes to prospects that have already been approved.
   */
  const onSave = handleSubmit((data: EditAndApproveStoryFormData): void => {
    data.state = prospect.state;
    onSubmit(data);
  });

  return (
    <form name="edit-and-approve">
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
            value={prospect.url}
          />
        </Grid>

        <Grid item xs={12}>
          <Box py={3}>
            <Divider />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="publisher"
            inputRef={register}
            name="publisher"
            label="Publisher"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={prospect.publisher ?? ''}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="author"
            inputRef={register}
            name="author"
            label="Author"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={prospect.author ?? ''}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="title"
            name="title"
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : null}
            inputRef={register({
              required: {
                value: true,
                message: 'Please enter a title for this story',
              },
            })}
            InputLabelProps={{
              shrink: true,
            }}
            label="Headline"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            value={prospect.title ?? ''}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="excerpt"
            name="excerpt"
            error={!!errors.excerpt}
            helperText={errors.excerpt ? errors.excerpt.message : null}
            inputRef={register({
              required: {
                value: true,
                message: 'Please enter a short description for this story',
              },
            })}
            InputLabelProps={{
              shrink: true,
            }}
            label="Excerpt"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            value={prospect.excerpt ?? ''}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              image={imageUrl || '/brokenImage.svg'}
              title={prospect.altText}
              className={classes.thumbnail}
              onError={handleMissingThumbnail}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="altText"
            name="altText"
            inputRef={register}
            label="Alt Text"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rows={8}
            variant="outlined"
            value={prospect.altText ?? ''}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="imageUrl"
            name="imageUrl"
            error={!!errors.imageUrl}
            helperText={errors.imageUrl ? errors.imageUrl.message : null}
            inputRef={register({
              pattern: {
                value: VALID_URL_REGEX,
                message: 'Please enter a valid URL',
              },
            })}
            label="Thumbnail URL"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={imageUrl ?? ''}
            onChange={updateThumbnail}
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
            value={prospect.source ?? ''}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl
            error={!!errors.topic}
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel htmlFor="topic">Topic</InputLabel>
            <Select
              native
              inputProps={{
                name: 'topic',
                id: 'topic',
              }}
              inputRef={register({
                required: {
                  value: true,
                  message: 'Please choose a topic for this story',
                },
              })}
              label="Topic"
              value={prospect.topic ?? ''}
              variant="outlined"
              onChange={handleTopicChange}
            >
              <option aria-label="None" value="" />
              <option value="Business">Business</option>
              <option value="Career">Career</option>
              <option value="COVID-19">COVID-19</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
              <option value="Gaming">Gaming</option>
              <option value="Health & Fitness">Health &amp; Fitness</option>
              <option value="Parenting">Parenting</option>
              <option value="Personal Finance">Personal Finance</option>
              <option value="Politics">Politics</option>
              <option value="Science">Science</option>
              <option value="Self Improvement">Self Improvement</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
            </Select>
            <FormHelperText>
              {errors.topic ? errors.topic.message : null}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="history"
            name="history"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
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
            value={true}
            control={<Switch color="primary" />}
            inputRef={register}
            name="prioritizeStory"
            label="Prioritize this story"
            labelPlacement="start"
          />
        </Grid>

        <Grid item xs={12}>
          <Box py={3}>
            <Divider />
          </Box>
        </Grid>

        <Grid item xs={12} className={classes.alignRight}>
          {prospect.state !== 'APPROVED' && (
            <>
              <Box display="inline">
                <Button buttonType="negative" type="submit" onClick={onReject}>
                  Reject
                </Button>
              </Box>

              <Box display="inline" ml={1}>
                <Button buttonType="neutral" type="submit" onClick={onSnooze}>
                  Snooze
                </Button>
              </Box>

              <Box display="inline" ml={1}>
                <Button buttonType="positive" type="submit" onClick={onApprove}>
                  Approve
                </Button>
              </Box>
            </>
          )}
          {prospect.state === 'APPROVED' && (
            <Box display="inline" ml={1}>
              <Button buttonType="positive" type="submit" onClick={onSave}>
                Save
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </form>
  );
};
