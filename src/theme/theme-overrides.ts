import { Components, Theme } from '@mui/material/styles';

const componentOverrides: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',

        '&:before': {
          display: 'none',
        },

        '&.Mui-expanded': {
          margin: 0,
        },
      },
    },
  },

  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 0,

        '&.Mui-expanded': {
          minHeight: 'unset',
        },
      },

      content: {
        margin: 0,

        '&.Mui-expanded': {
          margin: 0,
        },
      },
    },
  },

  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
};

export default componentOverrides;
