import React from "react";
import "./pocket.css";
import photo from "../img/pocket.png";
import Button from "@material-ui/core/Button";

export default function logo() {
  return (
    <div className="main">
      <div className="logo">
        <img src={photo} alt="pocket logo" />
      </div>

      <div>
        <Button variant="contained" color="primary">
          Omogbare Sikpojie
        </Button>
      </div>
    </div>
  );
}
