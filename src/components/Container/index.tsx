/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Container: React.SFC = ({ children }) => (
  <div
    sx={{
      width: theme => ['100%'].concat(theme.breakpoints),
      mx: 'auto',
    }}
  >
    {children}
  </div>
);

export default Container;
