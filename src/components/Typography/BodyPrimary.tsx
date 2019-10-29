/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';

interface Props {
  bold: boolean;
}

export const BodyPrimary: React.SFC<Props> = ({ children, bold }) => (
  <Styled.p
    sx={{
      color: 'primary',
      fontFamily: 'body',
      fontSize: [0],
      fontWeight: bold ? 'bold' : 'body',
      lineHeight: 'body',
      paddingY: 3,
    }}
  >
    {children}
  </Styled.p>
);
