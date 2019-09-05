/** @jsx jsx */

import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

interface Props {}

const InlineLi: React.SFC = ({ children }) => (
  <li
    sx={{
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
  >
    {children}
  </li>
);

/**
 * @TODO the ideal solution would be to use a Styled.a component. However,
 * theres currently a bug with the TypeScript definition that doesn't allow the
 * component to pass the `to` property to the `a` HTML Element
 * @SEE: https://github.com/system-ui/theme-ui/issues/342
 */
const StyledLink: React.SFC<GatsbyLinkProps<unknown>> = ({ children, to }) => (
  <Link
    to={to}
    sx={{
      textDecoration: 'none',
      fontFamily: 'body',
      color: 'primary',
      px: 3,
    }}
  >
    {children}
  </Link>
);

const NavBar: React.SFC<Props> = () => (
  <nav
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <img
      src=""
      sx={{
        width: '48px',
        height: '48px',
        my: 3,
        border: '1px solid black',
      }}
    />
    <Styled.ul sx={{ display: 'inline-block' }}>
      <InlineLi>
        <StyledLink to="/#participate">Participate</StyledLink>
      </InlineLi>
      <InlineLi>
        <StyledLink to="/#about">About</StyledLink>
      </InlineLi>
      <InlineLi>
        <StyledLink to="/#speakers">Previous Speakers</StyledLink>
      </InlineLi>
      <InlineLi>
        <StyledLink to="/#newsletter">Newsletter</StyledLink>
      </InlineLi>
    </Styled.ul>
  </nav>
);

export default NavBar;
