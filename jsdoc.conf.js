module.exports = {
  plugins: [],
  recurseDepth: 10,
  source: {
    include: ['./src'],
    includePattern: '.js$',
    excludePattern: '',
  },
  sourceType: 'module',
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure'],
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
  },
  opts: {
    template: 'node_modules/docdash',
  },
};
