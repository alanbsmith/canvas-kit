module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:import/recommended',
    // 'plugin:react/recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:compat/recommended',
    'plugin:react-ssr/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.eslint.json', './cypress/tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  plugins: [
    'workday-custom-rules',
    '@typescript-eslint',
    'jest',
    'react',
    'prettier',
    'react-hooks',
    '@emotion',
    'jsdoc',
    'react-ssr',
  ],
  rules: {
    'workday-custom-rules/restricted-imports': 'error',
    'workday-custom-rules/use-ck-slash-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {selector: ['class', 'interface'], format: ['PascalCase']},
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@emotion/jsx-import': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/syntax-preference': ['error', 'object'],
    '@emotion/pkg-renaming': 'error',
    'arrow-parens': ['off', 'as-needed'],
    'default-case': 'error',
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-caller': 'error',
    'no-duplicate-imports': 'error',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-undef-init': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-use-before-define': 'off', // TS takes care of this one...
    'no-var': 'error',
    'prefer-const': 'error',
    'space-before-function-paren': 'off',
    'react/jsx-no-bind': 'off', // Keep perf implications in mind, but was giving too many warnings and hurting readability
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    curly: 'error',
    radix: 'error',
  },
};
