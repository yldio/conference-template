/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';

interface ImageProps {
  image: any;
  alt: string;
  className?: string;
  width: string;
  height: string;
}

const Image: React.FC<ImageProps> = ({ image, alt, className, ...props }) => {
  return (image.fluid || {}).src ? (
    <Img
      alt={alt || image.title}
      fluid={image.fluid}
      className={className}
      {...props}
    />
  ) : (
    <img
      alt={alt || image.title}
      src={(image.file || {}).url}
      className={className}
      {...props}
    />
  );
};

// TODO set width: 100% and height: auto like in yld.io

export default Image;
