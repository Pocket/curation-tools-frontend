import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Tabs, TabsProps as MuiTabsProps } from '@material-ui/core';
import { curationPalette } from '../../theme';

/**
 * Styles for the TabNavigation component.
 */
const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: curationPalette.white,
    boxShadow: 'none',
  },
  tabs: {
    boxShadow: '0px 2px 3px -3px black',
  },
  indicator: {
    backgroundColor: curationPalette.blue,
  },
}));

interface TabsProps {
  /**
   * Event types in Material UI are quite inflexible for some components
   * and need to be overriden with event signatures we actually use.
   * @param event
   * @param value
   */
  onChange: (event: React.ChangeEvent<unknown>, value: string) => void;
}

/**
 * TabNavigation - a wrapper component for custom tabs (see Tab, TabLink, and TabPanel)
 * that are passed as children.
 */
export const TabNavigation: React.FC<
  Omit<MuiTabsProps, 'onChange'> & TabsProps
> = (props) => {
  const classes = useStyles();
  const { value, onChange, children } = props;

  return (
    <AppBar className={classes.appBar} color="default" position="static">
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={onChange}
        indicatorColor="primary"
        TabIndicatorProps={{ className: classes.indicator }}
        textColor="primary"
        variant="fullWidth"
      >
        {children}
      </Tabs>
    </AppBar>
  );
};
