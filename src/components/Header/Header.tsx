import React from 'react';
import pocketLogo from '../../assets/PKTLogoRounded_RGB.png';
import { Tabs, Tab, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const GRADIENT =
  'linear-gradient(to right, #22b3a9, #49ad7b, #77a24a, #a29123, #ca7721, #da6f2e, #e8663d, #f45d4e, #f86e49, #fa7f46, #fa9045, #faa046)';

const useStyles = makeStyles({
  body: {
    margin: 0,
    padding: 0,
  },
  wrapper: {
    width: '100%',
    boxShadow: '0px 4px 10px rgba(148, 148, 148, 0.3)',
  },
  mainContainer: {
    maxWidth: '1024px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '10px',
    paddingLeft: '10px',
    height: '70px',
  },
  logo: {
    width: '130px',
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
  },
  rightContent: {
    display: 'flex',
  },
  button: {
    height: 40,
    marginRight: 15,
    marginTop: 15,
  },
  tab: {
    minWidth: '100px',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  locale: {
    fontWeight: 700,
    color: '#aaaaaa',
  },
  '&$selected': {
    color: '#black',
  },
});

export const Header = (): JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContainer}>
        <div className={classes.leftContent}>
          <img className={classes.logo} src={pocketLogo} alt="pocket-logo" />
          <p className={classes.locale}>EN-US</p>
        </div>
        <div className={classes.rightContent}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              height: '55px',
            }}
            centered
            TabIndicatorProps={{
              style: {
                background: GRADIENT,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
              },
            }}
          >
            <Tab className={classes.tab} label="New Tab" />
            <Tab className={classes.tab} label="Content" />
          </Tabs>

          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
          >
            Add Story
          </Button>
          <Button
            color="primary"
            variant="outlined"
            size="large"
            className={classes.button}
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};
