/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

const BodyPrimary: React.SFC<ModifierProps> = props => (
  <Styled.p
    sx={{
      fontFamily: 'body',
      fontSize: 5,
      lineHeight: 'body',
      paddingY: 5,
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.p>
);

export default BodyPrimary;
