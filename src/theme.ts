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

  /* The "Prioritize this story" switch on the Edit & Approve form. */
  MuiSwitch: {
    root: {
      width: 80,
      height: 48,
      padding: 8,
    },
    switchBase: {
      padding: 11,
      color: curationPalette.white,
      '& $thumb': {
        backgroundColor: curationPalette.white,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 20 20" width="21"><path fill="${encodeURIComponent(
          curationPalette.neutral
        )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
      },
    },
    thumb: {
      width: 26,
      height: 26,
      backgroundColor: curationPalette.white,
    },
    track: {
      backgroundColor: curationPalette.neutral,
      opacity: '1 !important',
      borderRadius: 20,
      position: 'relative',
    },
    checked: {
      '&$switchBase': {
        transform: 'translateX(32px)',
      },
      '& $thumb': {
        backgroundColor: curationPalette.white,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="-2 0 20 20" width="20"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
          theme.palette.primary.main
        )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
      },
      '& + $track': {
        background: theme.palette.primary.main,
      },
    },
  },
};

export default theme;
