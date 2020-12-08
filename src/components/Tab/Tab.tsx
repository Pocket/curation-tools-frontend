import React from 'react';
import { Tab as MuiTab, Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
})(MuiTab);

const StyledBadge = withStyles({
  anchorOriginTopRightRectangle: {
    transform: 'translate(115%, 15%)',
  },
  colorSecondary: {
    backgroundColor: '#777777',
  },
})(Badge);

/**
 * Creation of TypeScript interface for the Tab component props.
 */
interface TabProps {
  label: string;
  articleCount: number;
}

/**
 * A custom Tab component containing a badge with the number of articles
 * under each tab.
 */
export const Tab: React.FC<TabProps> = ({ label, articleCount, ...props }) => {
  return (
    <StyledTab
      {...props}
      label={
        <StyledBadge badgeContent={articleCount} max={999} color="secondary">
          {label}
        </StyledBadge>
      }
    />
  );
};
