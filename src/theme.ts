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
};

export default theme;
