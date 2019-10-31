/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

interface DisplayTitleProps extends ModifierProps {
  small: boolean;
}

const DisplayTitle: React.SFC<DisplayTitleProps> = ({ small, ...props }) => (
  <Styled.p
    sx={{
      fontFamily: 'heading',
      fontSize: small ? [6] : [7],
      lineHeight: small ? 'headingSmall' : 'heading',
      paddingY: 3,
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.p>
);

export default DisplayTitle;
