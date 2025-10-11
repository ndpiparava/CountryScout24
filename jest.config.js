module.exports = {
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/src/__specs__/spec-setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!expo-localization|react-native|react-native-.*|react-navigation-.*|@react-navigation|@react-native-.*|redux-persist)/',
    'jest-runner',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
};
