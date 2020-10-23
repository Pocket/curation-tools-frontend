import React from 'react';
import logo from '../assets/logo.png';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      margin: 'auto',
    },
    img: {
      width: '50%',
    },
    btn: {
      backgroundColor: 'teal ',
      color: 'white',
      margin: '1.5em auto',
      textTransform: 'capitalize',
    },
    input: {
      marginTop: '2em',
      paddingTop: '1em',
    },
  })
);
const LoginForm: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete='off' className={classes.form}>
        <img src={logo} alt='Pockets Logo' className={classes.img} />
        <TextField id='outlined-basic' label='Your Email' variant='outlined' />
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          className={classes.input}
        />
        <Button
          variant='contained'
          color='inherit'
          className={classes.btn}
          disableElevation
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
