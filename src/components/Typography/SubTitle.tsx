/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { modifiers, ModifierProps } from './utils/modifiers';

const SubTitle: React.SFC<ModifierProps> = props => (
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

SubTitle.defaultProps = {
  bold: true,
};

export default SubTitle;
