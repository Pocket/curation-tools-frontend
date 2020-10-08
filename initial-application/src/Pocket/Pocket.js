import React from "react";
import logo from './pocket-logo.png';
import Button from '@material-ui/core/Button';
import classes from './Pocket.module.css';

function Pocket (props) {
    return (
        <div className={classes.Pocket}>
            <img className={classes.PocketImg} src={logo} alt="Pocket logo"/>
            <Button variant="contained" color="secondary">
               Jane Muthoni
            </Button>
        </div>
    )
}

export default Pocket;