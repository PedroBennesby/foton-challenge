module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'next/core-web-vitals',
    'prettier',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'require-jsdoc': 'off',
    'react/no-children-prop': 'off',
    'no-unused-vars': 'off',
    'no-array-constructor': 'off',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
