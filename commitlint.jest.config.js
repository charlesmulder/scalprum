module.exports = {
  testMatch: ['**/commitlint.config.test.js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': ['babel-jest', { presets: [['@babel/preset-env', { targets: { node: 'current' } }]] }],
  },
  transformIgnorePatterns: ['node_modules/(?!(@commitlint)/)'],
};
