import React from 'react';
import { render } from '@testing-library/react';
import { H1, Variants } from './';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('snapshot', () => {
    const { container } = render(<H1 variant={Variants.Dark}>Hello World</H1>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the given text', () => {
    const text = 'Hello World';
    const { getByText } = render(<H1>{text}</H1>);
    const content = getByText(text);

    expect(content).toBeInTheDocument();
  });
});
