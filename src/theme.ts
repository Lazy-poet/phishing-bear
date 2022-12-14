import { createTheme, lightThemePrimitives, Theme } from "baseui";

type Breakpoints = {
  xxsmall: number | string,
  xsmall: number | string,
  small: number | string;
  medium: number | string
  large: number | string
  xlarge: number | string
}
const breakpoints: Breakpoints = {
  xxsmall: 420,
  xsmall: 678,
  small: 920,
  medium: 1200,
  large: 1440,
  xlarge: 1940
};
const ResponsiveTheme = (
  Object.keys(breakpoints) as (keyof Breakpoints)[]
).reduce(
  (acc, key) => {
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {} as Record<keyof Breakpoints, string>,
  }
);
const overrides = {
  name: "custom-typography",
  ...ResponsiveTheme,
  typography: {
    primaryFontFamily: "'Inter', sans-serif",
    font: (size: number | string, weight: number = 400) => ({
      fontFamily: "'Raleway', sans-serif",
      fontSize: typeof size === "number" ? `${size}px !important` : size + ' !important',
      fontWeight: weight,
      lineHeight: 1.5,
    }),
    fontBold12: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    font14: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    fontBold14: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
  sizing: {
    scale25: "25px",
    scale30: "30px",
  },
  borders: {
    borderE6: {
      borderColor: "#E6E6E6",
      borderStyle: "solid",
      borderWidth: "1px",
    },
    borderEA: {
      borderColor: "#eaeaea",
      borderStyle: "solid",
      borderWidth: "1px",
    },
  },
  buttonBorderRadius: "3px",
  colors: {
    primary: "#FDD244",
    secondary: "#35BA6E",
    accent: "#B4873F",
    overlay: "rgba(14, 41, 75, 0.7)",
    // dark: '#1A2040',
    dark: '#381A46',
    bg: '#E3F5EB',
    bgHover: '#9FDEB8'
  },
}
export const theme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: "'Lato', sans-serif",
    primary: "#00C58D",
    primary700: "#00bd87",
  },
  overrides
);

export type CustomTheme = typeof theme & typeof overrides;