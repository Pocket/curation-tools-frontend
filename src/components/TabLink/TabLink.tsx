import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Chip } from '../Chip/Chip';

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
    const { count, children, tabSelected, ...otherProps } = props;
    const showChip = !!(count && count > 0);

    // workaround to make sure the chip on the active tab is highlighted.
    const color = tabSelected ? 'primary' : 'default';

    // don't show the exact number of articles if there are more than
    // a thousand of them.
    const chipLabel = count && count > 999 ? '999+' : count;

    return (
      <Link {...otherProps} ref={ref}>
        {children}
        {showChip && <Chip label={chipLabel} size="small" color={color} />}
      </Link>
    );
  }
);
