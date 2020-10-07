import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import pocket from "./assets/pocket.png";

import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: 450,
    padding: 40,
    color: "red",
  },
  borderRed: {
    padding: 20,
    marginRight: "auto",
    marginLeft: "auto",
    width: "50%",
    height: 300,
  },
  media: {
    height: 120,
    width: 180,
    marginRight: "auto",
    marginLeft: "auto",
    alignSelf: "center",
  },
  btn: {
    marginTop: 20,
    width: 200
  },
});
const Welcome = () => {
  const classes = useStyles();
  return (
    <Grid  container className={classes.root}  direction="column">
      <Grid  container className={classes.borderRed}   direction="column"  alignItems="center">
        <CardMedia
          className={classes.media}
          image={pocket}
          title="Contemplative Reptile"
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.btn}
        >
          LAPE AKINTAN
        </Button>
      </Grid>
    </Grid>
  );
};

export default Welcome;
