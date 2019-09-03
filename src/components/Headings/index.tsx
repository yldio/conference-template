/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { Variants } from '../shared/definitions';

interface Props {
  /**
   * Variant: either Light or Dark, it can be imported from the Variants enum
   */
  variant?: Variants;
}

export const H1: React.SFC<Props> = ({ variant, children }) => (
  <Styled.h1 sx={{ variant: `headings.${variant}` }}>{children}</Styled.h1>
);
H1.defaultProps = {
  variant: Variants.Dark,
};

export const H2: React.SFC<Props> = ({ variant, children }) => (
  <Styled.h2 sx={{ variant: `headings.${variant}` }}>{children}</Styled.h2>
);
H2.defaultProps = {
  variant: Variants.Dark,
};

export const H3: React.SFC<Props> = ({ variant, children }) => (
  <Styled.h3 sx={{ variant: `headings.${variant}` }}>{children}</Styled.h3>
);
H3.defaultProps = {
  variant: Variants.Dark,
};

export const H4: React.SFC<Props> = ({ variant, children }) => (
  <Styled.h4 sx={{ variant: `headings.${variant}` }}>{children}</Styled.h4>
);
H4.defaultProps = {
  variant: Variants.Dark,
};

export const H5: React.SFC<Props> = ({ variant, children }) => (
  <Styled.h5 sx={{ variant: `headings.${variant}` }}>{children}</Styled.h5>
);
H5.defaultProps = {
  variant: Variants.Dark,
};

export const H6: React.SFC<Props> = ({ variant, children }) => (
  <Styled.h6 sx={{ variant: `headings.${variant}` }}>{children}</Styled.h6>
);
H6.defaultProps = {
  variant: Variants.Dark,
};

export { Variants };

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
