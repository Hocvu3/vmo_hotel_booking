import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js'], // Áp dụng cho tất cả các file JS
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.es2021 },
    },
  },
  {
    // Cấu hình cho Frontend (ES6 Modules)
    files: ['public/**/*.js', 'client/**/*.js'], // Thay đổi theo thư mục frontend của bạn
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },
  {
    // Cấu hình cho Backend (CommonJS)
    files: ['**/*.js'], // Áp dụng cho tất cả các file JS
    ignores: ['public/**/*.js', 'client/**/*.js'], // Bỏ qua frontend
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },
  {
    ignores: ['public/dist/**/*.js'],
  },
];
