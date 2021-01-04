import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '../Button/Button';
import pocketLogo from '../../assets/PKTLogoRounded_RGB.png';
import { Feed } from '../../services/types/Feed';

/**
 * Styles for the HandleApiResponse component.
 */
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
    textTransform: 'uppercase',
  },
  '&$selected': {
    color: '#black',
  },
});

interface HeaderProps {
  feed: Feed | undefined;
}

/**
 * Page header for all pages that authorised users see.
 *
 * @param props
 */
export const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const currentFeed = props.feed?.name;

  /**
   * Highlight active tab based on URL matching, i.e. on /:feed/newtab/* pages
   * underline "New Tab".
   */
  let selectedTab: number | false = false;
  if (pathname.includes('newtab')) {
    selectedTab = 0;
  } else if (pathname.includes('prospects')) {
    selectedTab = 1;
  }

  /* Keep track of active tabs */
  const [value, setValue] = useState(selectedTab);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContainer}>
        <div className={classes.leftContent}>
          <img className={classes.logo} src={pocketLogo} alt="pocket-logo" />
          {/* TODO: use `feeds` prop to display dropdown with available feeds if more than one is available */}
          <p className={classes.locale}>{currentFeed}</p>
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
            <Tab
              className={classes.tab}
              component={Link}
              to={`/${currentFeed}/newtab/live/`}
              label="New Tab"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to={`/${currentFeed}/prospects/`}
              label="Prospects"
            />
          </Tabs>
          <Button
            className={classes.button}
            component={Link}
            to={`/${currentFeed}/prospects/article/add/`}
          >
            Add Story
          </Button>
          <Button buttonType="hollow" size="large" className={classes.button}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};
