const path = require('path');
module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/*.{js,jsx}'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, '/styleguidist/style/wrapper/Wrapper.js')
  },
  theme: {
    maxWidth: 'auto'
  },
};
