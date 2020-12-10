import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

/**
 * Creation of specific styles for specific class names.
 */
const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  tabs: {
    boxShadow: '0px 2px 3px -3px black',
  },
}));

/**
 * Creation of TypeScript interface for the TabsNavigation component props.
 */
interface TabNavigationProps {
  children: Array<JSX.Element>;
}

/**
 * TabNavigation - a wrapper component for custom tabs (see Tab.tsx)
 * that are passed as children.
 */
export const TabNavigation: React.FC<TabNavigationProps> = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  /**
   * Callback function required by the props "onChange" of the "Tabs" Material-UI component.
   */
  const tabChangeHandler = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  /**
   * Renders the component.
   */
  return (
    <AppBar className={classes.appBar} color="default" position="static">
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={tabChangeHandler}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {props.children}
      </Tabs>
    </AppBar>
  );
};
