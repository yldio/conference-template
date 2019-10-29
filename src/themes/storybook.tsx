import React from 'react';
import { ThemeProvider } from 'theme-ui';
import defaultTheme from './default';
import { Global, css } from '@emotion/core';

const StorybookTheme = ({ storyFn }: { storyFn: any }) => (
  <ThemeProvider theme={defaultTheme}>
    {storyFn()}
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
      `}
    />
  </ThemeProvider>
);

export default StorybookTheme;
