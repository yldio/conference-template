/** @jsx jsx */
import React from 'react';
import { H1, H2, H3, Variants as HeadingsVariants } from '../Headings';
import { Variants } from '../shared/definitions';
import { jsx } from 'theme-ui';

interface Props {
  title: string;
  description: string;
  date: string;
  variant?: Variants;
}

/**
 * While at the moment, all components share a light and dark variant
 * we can't assume that it will stay that way for the entire future.
 * Some components might get independent variants.
 * So we need to ensure that we convert Hero Variants into Heading Variants
 */
const getHeadingVariant = (variant: Variants = Variants.Dark): Variants => {
  switch (variant) {
    case Variants.Light:
      return HeadingsVariants.Light;
    case Variants.Dark:
    default:
      return HeadingsVariants.Dark;
  }
};

const Hero: React.SFC<Props> = ({ title, description, date, variant }) => {
  const headingVariant = getHeadingVariant(variant);

  return (
    <div>
      <H1 variant={headingVariant}>{title}</H1>
      <div sx={{ maxWidth: '525px' }}>
        <H2 variant={headingVariant}>{description}</H2>
      </div>
      <H3 variant={headingVariant}>{date}</H3>
    </div>
  );
};

Hero.defaultProps = {
  variant: Variants.Dark,
};

export { Variants };

export default Hero;
