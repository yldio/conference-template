/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';

export enum Variants {
  Light = 'light',
  Dark = 'dark',
}

interface Props {
  /**
   * Variant: either Light or Dark, it can be imported from the Variants enum
   */
  variant?: Variants;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const Button: React.SFC<Props> = ({ children, variant, onClick }) => (
  <button sx={{ variant: `buttons.${variant}` }} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: Variants.Dark,
};

export default Button;
