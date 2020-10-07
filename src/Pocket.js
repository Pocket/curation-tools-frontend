import React from 'react';
import Button from '@material-ui/core/Button';
import PocketLogo from './pocket.svg';
import './App.css';

function Pocket(){
return (
<div className="container">
<img src={PocketLogo} className="pocket-logo" alt="logo" />
<Button variant="contained" color="secondary" className="button-large">Lorela Jano</Button>
</div>
);

}
export default Pocket;