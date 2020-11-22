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
 * Creation of TypeScript interface for the CustomTab component props.
 */
interface CustomTabProps {
  title: string;
  badge: number;
}

/**
 * Creation of the "CustomTab" component.
 */
const CustomTab: React.FC<CustomTabProps> = ({ ...props }) => {
  return (
    <StyledTab
      {...props}
      label={
        <StyledBadge badgeContent={props.badge} max={999} color="secondary">
          {props.title}
        </StyledBadge>
      }
    />
  );
};

export default CustomTab;
