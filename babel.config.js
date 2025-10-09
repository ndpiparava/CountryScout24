module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@CountryScout24': './src',
          '@e2e': './e2e',
        },
      },
    ],
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
  ],
};
