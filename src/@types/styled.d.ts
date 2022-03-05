import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      cian: string;
      purple: string;
      black:   string;
      white:  string;
    },
    FONTS: {
        regular: number;
        medium: number;
        semiBold: number;
    }
  }
}