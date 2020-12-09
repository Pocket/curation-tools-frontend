import { createMuiTheme, Theme } from '@material-ui/core/styles';

/* Curation frontend colors */
const primary = '#008078'; // green
const secondary = '#b24000'; // red/brown
const neutral = '#737373'; // grey
const white = '#FFFFFF';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: secondary,
      contrastText: white,
    },
  },
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
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      fontWeight: 700,
      textTransform: 'none',
    },

    contained: {
      backgroundColor: neutral,
      color: white,
      '&:hover': {
        backgroundColor: theme.palette.grey[700],
      },
    },

    outlined: {
      backgroundColor: white,
      border: `2px solid ${neutral}`,
    },

    outlinedPrimary: {
      border: `2px solid ${theme.palette.primary.main}`,
      '&:hover': {
        border: `2px solid ${theme.palette.primary.dark}`,
      },
    },

    outlinedSecondary: {
      border: `2px solid ${theme.palette.secondary.main}`,
      '&:hover': {
        border: `2px solid ${theme.palette.secondary.dark}`,
      },
    },
  },

  MuiDivider: {
    root: {
      backgroundColor: theme.palette.grey[400],
    },
  },

  MuiInputLabel: {
    shrink: {
      fontWeight: 'bold',
    },
  },

  MuiSwitch: {
    root: {
      width: 80,
      height: 48,
      padding: 8,
    },
    switchBase: {
      padding: 11,
      color: white,
      '& $thumb': {
        backgroundColor: white,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 20 20" width="21"><path fill="${encodeURIComponent(
          neutral
        )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
      },
    },
    thumb: {
      width: 26,
      height: 26,
      backgroundColor: white,
    },
    track: {
      backgroundColor: neutral,
      opacity: '1 !important',
      borderRadius: 20,
      position: 'relative',
    },
    checked: {
      '&$switchBase': {
        transform: 'translateX(32px)',
      },
      '& $thumb': {
        backgroundColor: white,
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
