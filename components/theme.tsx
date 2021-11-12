import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const fonts = {
  heading: 'Source Sans Pro',
  body: 'Source Sans Pro',
  input: 'Source Sans Pro',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({ config, breakpoints, fonts });

export default theme;
