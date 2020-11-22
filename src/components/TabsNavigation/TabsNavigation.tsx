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
interface TabsNavigationProps {
  children: Array<JSX.Element>;
}

/**
 * Creation of the "TabsNavigation" component.
 *
 * ATTENTION --> In order to create each Tab, when you are in the file that will render the component,
 *               you need to import the "Tab" custom component that you can find in the same folder of
 *               this TabsNavigation component ("Tab.tsx"). You have to nest in the "TabsNavigation"
 *               component as many "Tab" components as tabs you may want.
 */
const TabsNavigation: React.FC<TabsNavigationProps> = props => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  /**
   * Callback function required by the props "onChange" of the "Tabs" Material-UI component.
   */
  const tabChangeHandler = (event: React.ChangeEvent<{}>, newValue: number) => {
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

export default TabsNavigation;
