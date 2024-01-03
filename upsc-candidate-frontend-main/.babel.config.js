module.exports = {
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  plugins: [
    'styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    production: {
      only: ['src'],
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
}
