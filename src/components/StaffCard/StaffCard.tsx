/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
// import SocialLink from '../SocialLink/SocialLink';
// import theme from '../../themes/default';

// const LinksContainer: React.FC = () => (
//   <Styled.div
//     css={{
//       display: 'flex',
//       marginTop: '-24px',
//       paddingBottom: '-6px',
//     }}
//   >
//     This is the LinksContainer
//   </Styled.div>
// );

const WrapperCol: React.FC = <Styled.div></Styled.div>;

const StaffCard: React.FC = ({
  name,
  image,
  role,
  description,
  socialLinks = [],
  dataTestId,
  colWidths = [1, 1, 1, 1, 6 / 12, 4 / 12],
  paddingBottom = {},
  emailAddress,
  contactUsRole,
}) => (
  <Styled.div sx={{}}>
    <WrapperCol
      width={colWidths}
      block={false}
      paddingBottom={paddingBottom}
      data-testid={dataTestId}
    >
      <Image image={image} width="100%" />
      {contactUsRole && <CardTitle bold>{contactUsRole}</CardTitle>}
      <Subtitle noPaddingBottom noPaddingTop={!contactUsRole}>
        {name}
      </Subtitle>
      <Padding bottom={3}>
        <Subtitle noPadding muted>
          {role}
        </Subtitle>
      </Padding>
      <Description noPadding>{description}</Description>
      <EndGroup>
        {emailAddress && (
          <BodyPrimary underline>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </BodyPrimary>
        )}
        <SocialLinks noMarginTop={emailAddress} data={socialLinks} />
      </EndGroup>
    </WrapperCol>
  </Styled.div>
);

export default StaffCard;
