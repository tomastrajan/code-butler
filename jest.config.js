module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules',
    '/workspace/'
  ],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@services/(.*)': '<rootDir>/src/app/services/$1',
    '@tasks/(.*)': '<rootDir>/src/app/tasks/$1',
  },
};