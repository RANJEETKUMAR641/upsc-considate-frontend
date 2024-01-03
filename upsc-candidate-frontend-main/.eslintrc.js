const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier', 'plugin:jsx-a11y/recommended'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 16,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/no-danger': 'off',
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    indent: 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'array-bracket-spacing': 2,
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    complexity: 0,
    'consistent-return': 1,
    'consistent-this': 0,
    curly: [2, 'multi-line'],
    'default-case': 0,
    'dot-location': [2, 'property'],
    'dot-notation': 0,
    'eol-last': 2,
    eqeqeq: [2, 'allow-null'],
    'func-names': 0,
    'func-style': 0,
    'guard-for-in': 0,
    'handle-callback-err': [2, '^(err|error|anySpecificError)$'],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'linebreak-style': 0,
    'max-depth': 0,
    'max-len': [2, 5000, 4],
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'new-cap': [0, { newIsCap: false, capIsNew: false }],
    'newline-after-var': [0, 'never'],
    'new-parens': 2,
    'no-alert': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-caller': 2,
    'no-catch-shadow': 0,
    'no-cond-assign': 2,
    'no-constant-condition': 0,
    'no-continue': 0,
    'no-control-regex': 2,
    'no-debugger': 0,
    'no-delete-var': 2,
    'no-div-regex': 0,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 0,
    'no-empty-character-class': 2,
    'no-labels': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 0,
    'no-extra-strict': 0,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 0,
    'no-lonely-if': 0,
    'no-loop-func': 0,
    'no-mixed-requires': 0,
    'no-mixed-spaces-and-tabs': [2, false],
    'no-multi-spaces': 2,
    'no-multi-str': 0,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 0,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 0,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 0,
    'no-var': 2,
    'no-void': 0,
    'no-warning-comments': 0,
    'no-with': 2,
    'object-curly-newline': 0,
    'object-curly-spacing': [2, 'always'],
    'one-var': 0,
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'prefer-const': 2,
    'quote-props': 0,
    quotes: [2, 'single', 'avoid-escape'],
    radix: 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/self-closing-comp': 2,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-unstable-nested-components': 0,
    'semi-spacing': 0,
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [2, 'never'],
    'keyword-spacing': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [0, 'always'],
    strict: 0,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'any'],
    'wrap-regex': 0,
    yoda: [2, 'never'],
    'react/require-extension': 0,
    'import/no-import-module-exports': 0,
    'prefer-arrow-callback': 0,
    camelcase: 0,
    'react/button-has-type': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-no-useless-fragment': 0,
    'object-shorthand': 0,
    'import/order': 0,
    'no-restricted-syntax': 0,
    'no-case-declarations': 0,
    'no-param-reassign': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-fragments': 0,
    'import/no-duplicates': 0,
    'react/function-component-definition': 0,
    'no-unsafe-optional-chaining': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-state': 0,
    'lines-between-class-members': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 2,
    'arrow-body-style': 0,
    'prefer-object-spread': 0,
    // need to fix by abhilasha
    'jsx-a11y/tabindex-no-positive': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
  },
}
