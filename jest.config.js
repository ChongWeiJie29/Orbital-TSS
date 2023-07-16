module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(react-native|my-module)/)'],
  globals: {
    __DEV__: true,
  },
  verbose: true,
  bail: true,
};
