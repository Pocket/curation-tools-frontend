import React, { useState } from 'react';
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
      paddingBottom: '2em',
      margin: 'auto',
    },
    btn: {
      backgroundColor: 'teal ',
      color: 'white',
      margin: '1.5em auto',
      textTransform: 'capitalize',
    },
  })
);

export const LoginForm: React.FC = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: add validation
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: add validation
    setPassword(event.target.value);
  };

  return (
    <div>
      <form
        aria-label="form"
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <img src={logo} alt="Pockets Logo" className={classes.img} />
        <TextField
          id="email"
          label="Your Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
        />
        <br /> <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePassword}
        />
        <Button
          variant="contained"
          color="inherit"
          className={classes.btn}
          disableElevation
        >
          Log In
        </Button>
      </form>
    </div>
  );
};
