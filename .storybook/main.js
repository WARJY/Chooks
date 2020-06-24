const path = require("path")

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', 'storybook-readme/register', {
    name: '@storybook/addon-storysource',
    options: {
      rule: {
        test: [/\.stories\.tsx?$/],
        include: [path.resolve(__dirname, '../stories')],
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      }
    }
  }]
}