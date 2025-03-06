import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.es2021 },
    },
  },
  {
    // Cấu hình cho Frontend (ES6 Modules)
    files: ['public/**/*.js', 'client/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },
  {
    // Cấu hình cho Backend (CommonJS)
    files: ['**/*.js'],
    ignores: ['public/**/*.js', 'client/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },
  {
    ignores: ['public/dist/**/*.js'],
  },
];
