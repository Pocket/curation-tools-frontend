import React from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="secondary">
          Vanessa
        </Button>
      </header>
    </div>
  );
}

export default App;
