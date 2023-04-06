import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  mode: {
    text: '#000',
    background: '#fff',
    buttonText: '#000',
    buttonTextHover: '#fff',
    buttonBorder: '#000',
    buttonBg: 'rgba(0, 0, 0, 0)',
    buttonBgHover: 'rgba(0, 0, 0, 1)',
  },
};

export const darkTheme: Theme = {
  mode: {
    text: '#fff',
    background: '#121212',
    buttonText: '#fff',
    buttonTextHover: '#000',
    buttonBorder: '#fff',
    buttonBg: 'rgba(255, 255, 255, 0)',
    buttonBgHover: 'rgba(255, 255, 255, 1)',
  },
};
