import React, { useState } from 'react';
import { Button, TextField, Divider, Box, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const AddStory = (): JSX.Element => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00695c',
        contrastText: '#fff',
      },
    },
  });

  const [url, setUrl] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <main>
      <Box display="flex" justifyContent="space-between" mt="1rem">
        <Typography variant="h4" component="h1">
          Add Story
        </Typography>
        <Button variant="outlined">Cancel</Button>
      </Box>
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
        <ThemeProvider theme={theme}>
          <Box display="flex" justifyContent="flex-end" mt="1rem">
            <Button className="parse-btn" variant="contained" color="primary">
              Parse
            </Button>
          </Box>
        </ThemeProvider>
      </form>
    </main>
  );
};
