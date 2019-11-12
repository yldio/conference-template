/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import Image from '../Image/Image';

interface TappableAnchorProps {
  title: string;
  href: string;
  imagesize: number;
}

const TappableAnchor: React.FC<TappableAnchorProps> = () => (
  <Styled.a
    css={{
      width: '48px',
      height: '48px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '&:first-child': {
        marginLeft: '-12px',
      },
    }}
  ></Styled.a>
);

interface SocialLinkProps {
  name: string;
  url: string;
  image: any;
  IMAGE_SIZE: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  name,
  url,
  image,
  IMAGE_SIZE = 24,
}) => {
  const size = `${IMAGE_SIZE}px`;

  return (
    <TappableAnchor title={name} href={url} imagesize={IMAGE_SIZE}>
      <Image image={image} alt={name} width={size} height={size} />
    </TappableAnchor>
  );
};

export default SocialLink;
