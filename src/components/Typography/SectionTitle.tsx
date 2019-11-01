/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

const DisplayTitle: React.SFC<ModifierProps> = props => (
  <Styled.h2
    sx={{
      fontFamily: 'heading',
      fontSize: [9, 9, 11],
      lineHeight: ['headingSmall', 'heading'],
      paddingTop: [6, 6, 3],
      paddingBottom: [4, 4, 2],
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.h2>
);

export default DisplayTitle;
