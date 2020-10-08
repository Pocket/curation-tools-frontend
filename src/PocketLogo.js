import React from 'react';
import logo from './pocket-shield.svg';
import Button from '@material-ui/core/Button';

function PocketLogo() {
  return (
    <div className='App'>
      <header className='pocket-header'>
        <img src={logo} className='pocket-logo' alt='logo' />
        <Button variant='contained' color='primary' className='pocket-button'>
          Abimbola Buari
        </Button>
      </header>
    </div>
  );
}

export default PocketLogo;
