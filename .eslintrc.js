module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    semi: [
      'error',
      'always',
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    // react config
    'react/jsx-uses-vars': 'error',
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
