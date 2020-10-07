import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import pocketLogo from '../pocket/pocket-logo.png';

function Pocket() {
    return (
        <div className="container">
            <img src={pocketLogo} alt="pocket logo" />
            <Button className="btn" variant="contained" color="primary">
                Peace Onyehanere
            </Button>
        </div>
    )
}

export default Pocket
