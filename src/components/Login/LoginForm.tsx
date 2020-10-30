import React from 'react';
import logo from '../../assets/PKTLogoRounded_RGB.png';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      margin: ' 5em auto',
    },
    img: {
      width: '50%',
      paddingBottom:'2em',
      margin:'auto'
    },
    btn: {
      backgroundColor: 'teal ',
      color: 'white',
      margin: '1.5em auto',
      textTransform: 'capitalize',
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
      <br/> <br/> 
       <TextField
          id='outlined-basic'
          label='Password'
          type="password"
          variant='outlined'
         
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
