import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

registerRequireContextHook();

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

addDecorator(withA11y);
addDecorator(withKnobs);

configure(
  global.__requireContext(
    __dirname,
    '../src',
    true,
    /(.*)(\.*)stories\.(js|ts|md)x*/,
  ),
  module,
);
