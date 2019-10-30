/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

interface BodyStylisedProps extends ModifierProps {
  small: boolean;
}

export const BodyStylised: React.SFC<BodyStylisedProps> = ({
  small,
  ...props
}) => (
  <Styled.p
    sx={{
      fontFamily: 'mono',
      fontSize: small ? [0] : [1],
      lineHeight: 'body',
      paddingY: 3,
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.p>
);
