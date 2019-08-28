import { render } from '@testing-library/react';
import React from 'react';
import Header from './';

import '@testing-library/jest-dom/extend-expect';

describe('Example', () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Hello World`;
    const { getByText } = render(<Header siteTitle={siteTitle} />);

    const title = getByText(siteTitle);

    expect(title).toBeInTheDocument();
  });
});
