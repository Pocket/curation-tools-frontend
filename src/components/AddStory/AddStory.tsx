import React, { useState } from 'react';
import {
  Button,
  TextField,
  Divider,
  Box,
  Typography,
  Grid,
} from '@material-ui/core';

import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  alignRight: {
    textAlign: 'right',
  },
}));

export const AddStory = (): JSX.Element => {
  const classes = useStyles();

  const [url, setUrl] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" component="h1" align="left">
            Add Story
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.alignRight}>
          <Button variant="outlined">Cancel</Button>
        </Grid>
      </Grid>
      <form>
        <TextField
          id="add-story"
          label="Story URL"
          placeholder="Placeholder"
          helperText="Edit & approve another story by changing this URL"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={url}
          onChange={handleChange}
        />
        <Divider />
        <Box display="flex" justifyContent="flex-end" mt="1rem">
          <Button color="primary" variant="contained">
            Parse
          </Button>
        </Box>
      </form>
    </>
  );
};
