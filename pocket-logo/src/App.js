import { Button } from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import "./App.scss";
import { ReactComponent as Pocketlogo } from "./assets/pocket-logo.svg";

function App() {
  return (
    <div className="App">
      <AppBar
        className="bar"
        position="static"
        style={{ background: "#1aa6b7" }}
      >
        <Pocketlogo />
      </AppBar>
      <div className="button">
        <Button
          style={{ background: "#1aa6b7", color: "#ffffff" }}
          variant="contained"
        >
          daiane silva
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
