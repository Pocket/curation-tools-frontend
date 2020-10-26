import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./component/Header";
import Button from "./component/Button";

function App() {
  return (
    <Fragment>
      <Header />
      <Button/>
    </Fragment>

    // <div className="App">
    /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Ajiboye Fatimo Happiness</p>
        </header> */
    // </div>
    // </Container>
  );
}

export default App;
