/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

export const BodyPrimary: React.SFC<ModifierProps> = props => (
  <Styled.p
    sx={{
      fontFamily: 'body',
      fontSize: [2],
      lineHeight: 'body',
      paddingY: 3,
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.p>
);
