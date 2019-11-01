/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

const DisplayTitle: React.SFC<ModifierProps> = props => (
  <Styled.h3
    sx={{
      fontFamily: 'heading',
      fontSize: [6, 6, 9],
      lineHeight: ['headingSmall', 'headingSmall', 'heading'],
      paddingTop: [5, 5, 6],
      paddingBottom: [5, 5, 4],
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.h3>
);

export default DisplayTitle;
