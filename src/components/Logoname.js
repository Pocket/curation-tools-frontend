import React from 'react';
import { Button } from '@material-ui/core';


function Logoname() {
    return (
        <div>
            <img src={require('../images/pocket_logo1.jpg')} alt="Pocket Logo"></img>
            <div>
                <Button variant="contained" color="primary">Debjani</Button>
            </div>
        </div>

    )
}

export default Logoname;