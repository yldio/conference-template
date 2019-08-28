module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  collectCoverage: true,
  moduleNameMapper: {
    '^.+\\.mdx?$': '<rootDir>/support/mdx-compiler.js',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/support/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    '.storybook',
    'coverage',
    'public',
    'storybook-static',
  ],
  // transformIgnorePatterns: ['support/(?!(Storyshots.test.js))'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    __PATH_PREFIX__: ``,
  },
};
