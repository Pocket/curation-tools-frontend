import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PocketImg from "./pocket.png";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: 15,
  },
}));

const Pocket = () => {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt="Pocket" src="./pocket.png" className={classes.large} />
      <Button variant="contained" color="primary">
        Mariam Adedeji
      </Button>
      <div className="container">
        <Avatar alt="Pocket" src={PocketImg} className={classes.large} />
        <Button variant="contained" color="primary" size="large">
          Mariam Adedeji
        </Button>
      </div>
    </div>
  );
};
export default Pocket;
