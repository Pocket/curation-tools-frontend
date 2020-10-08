import React from 'react';
import './Pocket.css';
import pocketLogo from '../images/pocket-logo.png';
import Button from '@material-ui/core/Button';

const Pocket = () => {
  return (
    <div className="logo">
      <img className="pocket" src={pocketLogo} alt="pocket logo" />
      <Button variant="contained" color="primary">
        Anthony Tweed
      </Button>
    </div>
  );
};

export default Pocket;
