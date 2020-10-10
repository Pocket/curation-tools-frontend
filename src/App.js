import React from 'react';
import logo from './pocket-logo.png';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" className="custom-btn" size="small">
          SUNAIRA
        </Button>
      </header>
    </div>
  );
}

export default App;
