import React from 'react';
import { Chip as MuiChip, ChipProps } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { curationPalette } from '../../theme';

/**
 * Styles for the Chip component
 */
const useStyles = makeStyles((theme: Theme) => ({
  /**
   * Default Chip styles - curation frontend neutral grey
   * background with white text.
   */
  root: {
    backgroundColor: curationPalette.neutral,
    color: curationPalette.white,
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  /**
   * Chip on the active tab: bright blue just like the tab label.
   */
  colorPrimary: {
    backgroundColor: curationPalette.blue,
  },
}));

/**
 * A custom Chip component that shows a number in a pill-like element.
 */
export const Chip: React.FC<ChipProps> = (props): JSX.Element => {
  const { label, color } = props;

  return (
    <MuiChip classes={useStyles()} label={label} size="small" color={color} />
  );
};
