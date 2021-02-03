import React from 'react';
import { Box, Divider, Button, TextField, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { VALID_URL_REGEX } from '../../constants';

interface AddStoryProps {
  /**
   * The submit handler passed to this component receives form data as a prop.
   *
   * @param data
   */
  onSubmit: (data: AddStoryFormData) => void;
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
            value: VALID_URL_REGEX,
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
      <Grid item xs={12}>
        <Box py={3}>
          <Divider />
        </Box>
      </Grid>
      <Box display="flex" justifyContent="flex-end" mt="1rem">
        <Button color="primary" variant="contained" type="submit">
          Parse
        </Button>
      </Box>
    </form>
  );
};
