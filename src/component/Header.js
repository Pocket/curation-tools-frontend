import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ padding: "10px" }}>
        <Toolbar variant="dense" style={{justifyContent: "center"}}>
          <Typography variant="h6" color="inherit">
            <img src={logo} className="App-logo" alt="logo" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
