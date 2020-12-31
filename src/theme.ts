// #region Global Imports
import 'styled-components';
import {
  createMuiTheme,
  responsiveFontSizes,
  Theme,
} from '@material-ui/core/styles';
// #endregion Global Imports

// Customize variables example
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// Create a theme instance example
export const theme = responsiveFontSizes(
  createMuiTheme({
    status: {
      danger: '#f47100',
    },
  }),
);
