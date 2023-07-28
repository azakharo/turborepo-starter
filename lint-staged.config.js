module.exports = {
  '(apps|packages)/**/*': () => [
    'npm run type-check',
    'npm run lint',
    'npm run code-format',
  ]
};
