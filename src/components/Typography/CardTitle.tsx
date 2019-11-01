/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

const CardTitle: React.SFC<ModifierProps> = props => (
  <Styled.h4
    sx={{
      fontFamily: 'heading',
      fontSize: [4, 4, 6],
      lineHeight: ['body', 'body', 'headingSmall'],
      paddingTop: [2, 3, 3],
      paddingBottom: [3, 3, 4],
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.h4>
);

CardTitle.defaultProps = {
  bold: true,
};

export default CardTitle;
