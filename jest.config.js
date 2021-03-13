module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],

  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
