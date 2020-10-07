import React from 'react';
import './App.css';

let pocketLogo = 'https://assets.website-files.com/5be2fc56e0d7eef944dd625e/5c784a82256c936749f0d904_pocket.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pocketLogo} className="App-logo" alt="logo" />
        <p>
          Outreachy Mozilla Pocket.
        </p>
        <a
          className="App-link"
          href="https://getpocket.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pocket
        </a>

        <a className="name-btn" href="https://shazeenfabiuscenter.netlify.app/" target="_blank" rel="noopener noreferrer">
          Shazeen Fabius
        </a>
      </header>
    </div>
  );
}

export default App;
