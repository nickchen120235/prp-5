module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'no-template-curly-in-string': ['error'],
    'eqeqeq': ['error', 'always'],
    'no-console': ['warn', {allow: ['warn', 'error']}],
    '@typescript-eslint/explicit-module-boundary-types': ['off']
  }
}
