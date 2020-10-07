import React from "react";
import logo from "./pocket-logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <Card>
        <CardMedia className={classes.media} image={logo} title="logo" />
        <Button variant="outlined" size="small" color="primary">
          Juliana Hernandez
        </Button>
      </Card>
    </Box>
  );
}

export default App;
