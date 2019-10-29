const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx', '.mdx');

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  return config;
};
