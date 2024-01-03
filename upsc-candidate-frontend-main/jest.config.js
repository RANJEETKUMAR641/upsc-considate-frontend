module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/*/RbGenerated*/*.{js,jsx,ts,tsx}',
    '!src/src.js',
    '!src/global-styles.js',
    '!src/*/*/Loadable.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  coveragePathIgnorePatterns: [
    'internals',
    'styles/theme/__tests__/utils.test.ts',
    'src/styles/media.ts',
    'store/__tests__/configureStore.test.ts',
    'src/store/configureStore.ts',
    'src/theme-library',
    'src/app/Plugins',
    'src/app/assets',
  ],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['raf/polyfill', './jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!troublesome-dependency/.*)',
    'node_modules/(?!variables/.*)',
    'node_modules/axios',
    'node_modules/styled-components/macro',
    'node_modules/react-password-checklist',
  ],
  snapshotSerializers: [],
}
