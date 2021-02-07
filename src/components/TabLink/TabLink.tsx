import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { Chip } from '../';
import { curationPalette } from '../../theme';

interface TabLinkProps {
  /**
   * Optional number of articles loaded on the tab.
   */
  count?: number;

  /**
   * Whether the current tab is active.
   */
  tabSelected: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    spinner: {
      color: curationPalette.white,
    },
  })
);

/**
 * Used for routing between various subpages available as tabs, i.e.
 * Prospects/Snoozed/Approved/Rejected. Optionally shows a Chip with
 * the number of articles available on that tab.
 */
export const TabLink = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & TabLinkProps
>(
  (props, ref): JSX.Element => {
    const classes = useStyles();
    const { count, children, tabSelected, ...otherProps } = props;
    const showChip = !!(count && count > 0);

    // workaround to make sure the chip on the active tab is highlighted.
    const color = tabSelected ? 'primary' : 'default';

    // don't show the exact number of articles if there is more
    // than a thousand of entries
    const chipLabel = count && count > 999 ? '999+' : count;

    return (
      <Link {...otherProps} ref={ref}>
        {children}
        <Chip
          label={
            showChip ? (
              chipLabel
            ) : (
              <CircularProgress size={14} className={classes.spinner} />
            )
          }
          size="small"
          color={color}
        />
      </Link>
    );
  }
);
