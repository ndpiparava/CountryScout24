// emotion.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      primary: string;
      primaryHover: string;
      danger: string;
      border: string;
      label: string;
      spinnerTrack: string;
      spinner: string;
      success: string;
      info: string;
      warning: string;
      satisfactory: string;
      boarderPrimary: string;
    };
    fonts: {
      body: string;
      mono: string;
    };
    spacing: (factor: number) => string;
    radii: {
      sm: string;
      md: string;
      lg: string;
      xlg: string;
    };
    fontSizes: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      vxl: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  }
}
