import React from "react";
import logo from "./pocket-logo.svg";
import "./App.css";
import Pocket from "./button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Pocket />
    </div>
  );
}

export default App;
