import React from "react";
import logo from "./pocket_logo.png";
import "./App.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #e33753 30%, #ec7a8f 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo" alt="pocket logo" />
        <Button className={classes.root}>Shreeti Upreti</Button>
      </div>
    </div>
  );
}

export default App;
