import React from 'react';
import pocketLogo from './media/images/pocket-logo.png';
import Button from '@material-ui/core/Button';

function PocketLogo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <img src={pocketLogo} alt="Pocket Logo" className="Center" />
      <div>
        <Button variant="contained" color="primary">
          Adelaide A
        </Button>
      </div>
    </div>
  );
}

export default PocketLogo;
