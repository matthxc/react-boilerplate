module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**', '<rootDir>/pages/**'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/server/',
    '<rootDir>/__tests__/integration/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'html', 'cobertura'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks.ts',
    '\\.(css|less|scss|html)$': '<rootDir>/mocks.ts',
    '^@(Test)(.*)$': '<rootDir>/test/$2',
    '^@(Server)(.*)$': '<rootDir>/server/$2',
    '^@([A-Z].*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest/presets/js-with-babel',
};
