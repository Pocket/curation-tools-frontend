import React from 'react';
import PocketLogo from '../images/Pocket_logo.png';
import { Container, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: '10px',
    maxHeight: '100px',
    maxWidth: '250px'
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.root}>
        <img src={PocketLogo} className={classes.logo} alt='Pocket logo' />
        <Button variant='contained' color='secondary'>
          Hope Ngerebara
        </Button>
      </div>
    </Container>
  );
};

export default Logo;
