import React from "react";
import "./AddStory.css";
import { Button, TextField, Divider, Box } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const AddStory = () => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00695c",
        contrastText: '#fff'
      }
    }
  })
  

  return (
      <main>
        <Box display="flex" justifyContent="space-between" mt="1rem">
          <h1>Add Story</h1>
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
        />
        <Divider/>
        <ThemeProvider theme={theme}>
          <Box display="flex" justifyContent="flex-end" mt="1rem" >
            <Button className="parse-btn" variant="contained" color="primary">Parse</Button>
          </Box>
        </ThemeProvider>
        </form>
      </main>
  )
}

export default AddStory;