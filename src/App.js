import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

let pocketLogo = 'https://assets.website-files.com/5be2fc56e0d7eef944dd625e/5c784a82256c936749f0d904_pocket.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pocketLogo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">Shazeen Fabius</Button>

      </header>
    </div>
  );
}

export default App;
