module.exports = {
    root: true,
    ignorePatterns: ['**/*'], // Ignore all files by default
    overrides: [
      {
        files: ['pages/**/*.mdx'],
        extends: 'plugin:mdx/recommended',
      },
    ],
  };
  