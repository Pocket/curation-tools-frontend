import React from "react";
import { Button, Container, makeStyles, Card } from "@material-ui/core";
import PocketLogo from "./img/pocket_app_logo.png";

function App() {
  const useStyles = makeStyles({
    logostyles: {
      width: "11rem",
      display: "block",
      margin: "2rem 0",
    },
    root: {
      width: "20rem",
      height: "15rem",
      margin: "4rem 2rem",
      padding: "2rem",
    },

    content: {
      margin: "0 auto",
      width: "12rem",
    },
  });

  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <div className={classes.content}>
          <img src={PocketLogo} className={classes.logostyles} alt="logo" />
          <Button variant="contained" color="primary">
            Jida Adwoa Asare
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default App;
