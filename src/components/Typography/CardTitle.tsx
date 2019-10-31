/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

const CardTitle: React.SFC<ModifierProps> = props => (
  <Styled.h3
    sx={{
      fontFamily: 'heading',
      fontSize: [4, 6],
      lineHeight: ['body', 'body', 'cardTitle', 'cardTitle'],
      paddingTop: [2, 3],
      paddingBottom: [4, 3],
      ...modifiers(props),
    }}
  >
    {props.children}
  </Styled.h3>
);

CardTitle.defaultProps = {
  bold: true,
};

export default CardTitle;
