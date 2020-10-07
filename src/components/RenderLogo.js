import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Logo from '../pocket_logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function RenderLogo() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction='column'
      justify='center'
      alignItems='center'
    >
      <img src={Logo} alt='pocket logo' />
      <Button className='' variant='contained' color='primary'>
        Segun Ogundipe
      </Button>
    </Grid>
  );
}

export default RenderLogo;
