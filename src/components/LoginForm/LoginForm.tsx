import React, { useState } from 'react';
import logo from '../../assets/PKTLogoRounded_RGB.png';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    img: {
      width: '60%',
    },
  })
);

export const LoginForm: React.FC = () => {
  const classes = useStyles();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: add validation
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: add validation
    setPassword(event.target.value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={10} sm={10} md={3}>
        <form aria-label="form" noValidate autoComplete="off">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <Grid container justify="center">
                <img src={logo} alt="Pocket Logo" className={classes.img} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Your Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={handlePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Button variant="contained" color="primary" size="large">
                  Log In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
