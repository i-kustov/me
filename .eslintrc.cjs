module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unreachable': 2,
    'no-console': 1,
    'no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'quotes': [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'semi': 2,
    'semi-spacing': 2,
    'semi-style': [2, 'last'],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
    ]
  },
  overrides: [
    {
      files: ['*.config.cjs'],
      env: {
        node: true,
      },
    },
  ],
}
