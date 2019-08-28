import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  config: ({ configure }) =>
    configure(() => {
      require('./src/components/Header/Header.stories.mdx');
    }, module),
});
