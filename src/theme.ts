import {
  /**
   * backport from v.5 to fix deprecation warnings in Material UI
   * see here for details: https://github.com/mui-org/material-ui/issues/13394
   */
  unstable_createMuiStrictModeTheme as createMuiTheme,
  Theme,
} from '@material-ui/core/styles';

/* Curation frontend colors */
export const curationPalette = {
  primary: '#008078', // dark green
  secondary: '#b24000', // red/brown
  neutral: '#737373', // dark grey
  blue: '#3668ff', // bright blue for active tabs
  white: '#FFFFFF',
};

const theme: Theme = createMuiTheme({
  palette: {
    /* The primary color palette: dark green + white for contrasting text. */
    primary: {
      main: curationPalette.primary,
      contrastText: curationPalette.white,
    },
    /* The secondary color palette: red/brown + white for contrasting text. */
    secondary: {
      main: curationPalette.secondary,
      contrastText: curationPalette.white,
    },
  },
  /* The font used is the system default one */
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme.props = {
  /* All the buttons in this project are flat. */
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {
  /* Global styles for buttons. */
  MuiButton: {
    root: {
      fontWeight: 700,
      textTransform: 'none',
    },

    /* The default button; used for "Snooze" and "Edit" actions. */
    contained: {
      backgroundColor: curationPalette.neutral,
      color: curationPalette.white,
      '&:hover': {
        backgroundColor: theme.palette.grey[700],
      },
    },

    /* Global styles for outlined buttons. */
    outlined: {
      backgroundColor: curationPalette.white,
      border: `2px solid ${curationPalette.neutral}`,
    },

    /* The outlined button; used for the "Log out" button in the header. */
    outlinedPrimary: {
      border: `2px solid ${theme.palette.primary.main}`,
      '&:hover': {
        border: `2px solid ${theme.palette.primary.dark}`,
      },
    },

    /**
     *  Outlined button in secondary (red/brown) colour; not currently used
     *  but provided here for completeness.
     */
    outlinedSecondary: {
      border: `2px solid ${theme.palette.secondary.main}`,
      '&:hover': {
        border: `2px solid ${theme.palette.secondary.dark}`,
      },
    },
  },

  /* The divider is slightly darker than the default MUI one. */
  MuiDivider: {
    root: {
      backgroundColor: theme.palette.grey[400],
    },
  },

  /* The shrunk labels on input fields are bolded for better readability. */
  MuiInputLabel: {
    shrink: {
      fontWeight: 'bold',
    },
  },
};

export default theme;
