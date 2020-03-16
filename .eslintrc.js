module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint', 
    'sonarjs',
    'security'],
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:security/recommended',
      'plugin:sonarjs/recommended',
      'prettier/@typescript-eslint', 
      'plugin:prettier/recommended'
    ],
  };