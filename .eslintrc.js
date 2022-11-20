module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended'
  ],
  plugins: ['unused-imports', 'promise'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
        extensions: ['.ts', '.js', '.vue']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'require-await': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'none',
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ]
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          // no relative imports allowed, always use alias,
          // it makes easier to move files later if necessary
          './**',
          '../**'
        ]
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'max-len': [
      'error',
      { code: 80, ignoreRegExpLiterals: true, ignorePattern: '^import .*' }
    ],
    'array-bracket-newline': ['error', { multiline: true }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    },
    {
      files: ['tests/**/*.ts'],
      rules: {
        'no-restricted-imports': 'off'
      }
    }
  ]
}
