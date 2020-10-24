const path = require('path');

module.exports = {
  rootDir: path.resolve('./'),
  testMatch: ['**/(src)/**/*.(spec).(ts|tsx)'],
  // testEnvironment: 'node',
  testEnvironment: 'jest-environment-jsdom-global',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  // moduleNameMapper: {
  //   pages: '<rootDir>/pages',
  // },
};
