import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#3f51b5',
    },

    background: {
      default: '#111111',
      paper: '#212121',
    },

    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',

    subtitle1: {
      fontWeight: '700',
      fontSize: 20,
      textAlign: 'left',
    },

    subtitle2: {
      fontWeight: 200,
      fontSize: 16,
      textAlign: 'left',
    },

    body1: {
      fontSize: 16,
    },

    body2: {
      fontSize: 14,
      fontWeight: 700,
    },

    caption: {
      fontSize: 12,
    },
  },
});
