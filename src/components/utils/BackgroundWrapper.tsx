import React, { ReactNode } from 'react';

interface BackGroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: BackGroundWrapperProps) => (
  <div style={{ background: '#090329' }}>{children}</div>
);

export default BackgroundWrapper;
