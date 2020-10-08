import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import PocketLogo from "../../assets/PocketLogo.png";
import "./index.css";

const styles = {
  root: {
    background: "linear-gradient(45deg, #e6005c 30%, #0066ff 90%)",
    borderRadius: 10,
    border: 0,
    color: "white",
    height: 60,
    padding: "1.5rem 4rem",
    margin: "2rem auto",
    fontSize: "1.5em"
  }
};

function LogoAndButton(props) {
  const { classes, children, className, ...other } = props;
  return (
    <div className="app-container">
      <img src={PocketLogo} alt="Pocket Logo" className="logo" />
      <a href="https://github.com/LadyFantasy">
        <Button className={clsx(classes.root, className)} {...other}>
          Soledad Martínez
        </Button>
      </a>
    </div>
  );
}

LogoAndButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(LogoAndButton);
