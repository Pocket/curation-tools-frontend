import React from 'react';
import {
  Tab as MuiTab,
  TabProps as MuiTabProps,
  LinkProps,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { curationPalette } from '../../theme';
import { TabLink } from '../';

/**
 * Styles for the TabLink component.
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  /**
   * Show active tab label as bright blue.
   */
  selected: {
    color: `${curationPalette.blue} !important`,
  },
  /**
   * Don't stretch the tab label element the entire width of the tab
   * so that the Chip with the number of articles is better placed
   * alongside the label.
   */
  wrapper: {
    width: '60%',
  },
}));

interface TabProps {
  /**
   * Optional number of articles in that tab
   */
  count?: number;

  /**
   * Tabs use a Link-based component for routing.
   */
  component?: LinkProps;

  /**
   * The TabLink component that is rendered inside the Tab
   * needs to know if the tab is selected but we can't use
   * the Tab.selected property as it won't be forwarded to the
   * TabLink component; a custom property is needed.
   */
  tabSelected?: boolean;

  /**
   * The route for the TabLink component.
   */
  to: string;
}

/**
 * A custom Tab component that uses TabLink (a customised Link
 * from react-router-dom) to display a tab with, optionally,
 * the number of articles under that tab. *
 */
export const Tab: React.FC<MuiTabProps & TabProps> = (props): JSX.Element => {
  const classes = useStyles();
  const { count, label, value } = props;

  return (
    <MuiTab
      classes={classes}
      component={TabLink}
      count={count}
      label={label}
      value={value}
      tabSelected={props.selected}
      {...props}
    />
  );
};
