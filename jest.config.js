module.exports = {
  verbose: true,
  preset: 'ts-jest',
  displayName: 'typesafe-routes',
  testMatch: ['**/?(*.)test.ts?(x)'],
  transformIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: require.resolve('./tsconfig.test.json'),
    },
  },
};
