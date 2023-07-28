module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'npm run type-check',

  // Lint then format TypeScript and JavaScript files
  'src/**/*.(ts|tsx|js|jsx)': filenames => [
    `npm run lint`,
    `npm run code-format`,
  ]
};
