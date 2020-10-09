import React from 'react';
import logo from './img/logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="pocket">
      <header className="pocket-header">
        <img src={logo} className="pocket-logo" alt="logo" />
        <Button variant="outlined" color="secondary" disableElevation>
          Ítalo Alves
        </Button>
      </header>
    </div>
  );
}

export default App;
