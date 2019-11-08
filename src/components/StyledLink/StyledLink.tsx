/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import theme from '../../themes/default';

interface StyledLinkProps {
  color: 'reverse' | 'secondary' | 'muted' | 'text';
  href: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  color = 'text',
  href,
  children,
}) => (
  <Styled.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      paddingY: '8px',
      paddingX: '6px',
      marginBottom: '24px',
      marginLeft: '-6px',
      lineHeight: '24px',
      color,
      fontWeight: 'styledLink',
      position: 'relative',
      display: 'inline-block',
      transition: 'background 200ms ease-out 0s',
      cursor: 'pointer',
    }}
    css={{
      ':after': {
        content: '""',
        display: 'block',
        height: '2px',
        width: '100%',
        marginTop: '6px',
        background: theme.colors[color],
        boxSizing: 'border-box',
        transition: 'background 200ms ease-out 0s',
      },
      '&:hover': {
        background: theme.colors.linkHover,
        color: theme.colors.text,

        '&:after': {
          background: theme.colors.text,
        },
      },
      '&:focus': {
        background: 'transparent',
        outline: `4px solid ${theme.colors.linkActive}`,
      },
      '&:active': {
        outline: 'none',
        background: theme.colors.linkActive,

        '&:after': {
          background: theme.colors.text,
        },
      },
    }}
  >
    {children}
  </Styled.a>
);

export default StyledLink;
