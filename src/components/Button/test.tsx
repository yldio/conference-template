import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button, { Variants } from './';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

describe.only('Button', () => {
  it('snapshot', () => {
    const { container } = render(
      <Button variant={Variants.Dark}>Hello World</Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the given text', () => {
    const text = 'Hello World';
    const { getByText } = render(<Button>{text}</Button>);
    const content = getByText(text);

    expect(content).toBeInTheDocument();
  });

  it('should call onClick event handler', () => {
    const text = 'Hello World';
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>{text}</Button>);

    userEvent.click(getByText(text));

    expect(onClick).toHaveBeenCalled();
  });
});
