module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {},
  plugins: [],
  rules: {
    // Vue
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 0,

    // Common
    'no-console': 1,
    'no-lonely-if': 1,
    'no-unused-vars': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': [1, 'always'],
    indent: ['warn', 2],
    semi: [1, 'never'],
    quotes: ['error', 'single'],
    'array-bracket-spacing': 1,
    'linebreak-style': 0,
    'no-unexpected-multiline': 'warn',
    'keyword-spacing': 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'arrow-spacing': 1
  }
}
