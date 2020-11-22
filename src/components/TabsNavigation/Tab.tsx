import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';

/**
 * Creation of a customized "Tab" Material-UI component.
 * Creation of a customized "Badge" Material-UI component.
 */
const StyledTab = withStyles({
  root: {
    textTransform: 'none',
    fontWeight: 600,
    '&.Mui-selected span.MuiBadge-badge': {
      backgroundColor: '#3F51B5',
    },
  },
})(Tab);

const StyledBadge = withStyles({
  anchorOriginTopRightRectangle: {
    transform: 'translate(115%, 15%)',
  },
  colorSecondary: {
    backgroundColor: '#777777',
  },
})(Badge);

/**
 * Creation of TypeScript interface for the PocketTab component props.
 */
interface TabContent {
  title: string;
  badge: string | number;
}

/**
 * Creation of the "PocketTab" component.
 */
const PocketTab: React.FC<TabContent> = ({ ...props }) => {
  return (
    <StyledTab
      {...props}
      label={
        <StyledBadge
          badgeContent={
            typeof props.badge === 'string' ? +props.badge : props.badge
          }
          max={999}
          color="secondary"
        >
          {props.title}
        </StyledBadge>
      }
    />
  );
};

export default PocketTab;
