module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/*.vue',
    'packages/**/*.js',
  ],
}
