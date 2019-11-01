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
      paddingTop: [4, 4, 5],
      paddingBottom: [6, 6, 5],
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
