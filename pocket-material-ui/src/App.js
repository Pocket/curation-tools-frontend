import React from 'react';
import logo from './pocket.svg';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Button variant="contained" color="primary">
        Bazgha Amin
      </Button>
      </div>
    </div>
  );
}

export default App;
