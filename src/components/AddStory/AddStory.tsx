import React from 'react';
import { Box, Divider, Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

interface AddStoryProps {
  /**
   * The submit handler passed to this component receives form data as a prop.
   *
   * @param data
   */
  onSubmit: (data: { url: string }) => void;
}

export interface AddStoryFormData {
  /**
   * The URL of the story to be parsed.
   */
  url: string;
}

/**
 * Add Story form. Validates the URL of the story to be added and displays any
 * validation errors to the user. Once successful, passes validated data
 * to the supplied submit handler for further processing.
 *
 * @param props
 */
export const AddStory: React.FC<AddStoryProps> = (props): JSX.Element => {
  const { onSubmit } = props;
  const { handleSubmit, register, errors } = useForm<AddStoryFormData>();

  return (
    <form name="add-story" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="url"
        inputRef={register({
          required: { value: true, message: 'Please enter a URL' },
          pattern: {
            // regex credit goes to https://gist.github.com/dperini/729294
            value: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
            message: 'Please enter a valid URL',
          },
        })}
        error={!!errors.url}
        name="url"
        label="Story URL"
        placeholder="Placeholder"
        helperText={
          errors.url
            ? errors.url.message
            : 'Edit & approve another story by changing this URL'
        }
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Divider />
      <Box display="flex" justifyContent="flex-end" mt="1rem">
        <Button color="primary" variant="contained" type="submit">
          Parse
        </Button>
      </Box>
    </form>
  );
};
