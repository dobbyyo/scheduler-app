import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mode: {
      text: string;
      background: string;
      buttonText: string;
      buttonTextHover: string;
      buttonBorder: string;
      buttonBg: string;
      buttonBgHover: string;
    };
  }
}
