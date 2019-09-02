/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';

interface Props {
  /**
   * There two variants for the default theme
   */
  variant?: 'light' | 'dark';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const Button: React.SFC<Props> = ({ children, variant, onClick }) => (
  <button sx={{ variant: `buttons.${variant}` }} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'dark',
};

export default Button;
