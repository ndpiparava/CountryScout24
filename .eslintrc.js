module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      parserOptions: {
        project: './tsconfig.json',
      },
      files: ['*.ts', '*.tsx', '*.d.ts', '*.mock.ts'],
    },
  ],
  //plugins: ['@typescript-eslint'],
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to ESLint
    },
    'import/ignore': ['node_modules'],
  },
  ignorePatterns: [
    'react-native.config.js',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    'node_modules/',
    '.yarn/', // Ensure this is here
    'scripts/',
    'coverage/',
    'vendor/',
    'android/app/build/',
    'ios/build/Build',
    'node_modules/',
  ],
  overrides: [
    {
      files: ['e2e/**/*.ts'],
      rules: {
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
      },
    },
    {
      parserOptions: {
        project: './tsconfig.json',
      },
      files: ['*.ts', '*.tsx', '*.d.ts', '*.mock.ts'],
    },
  ],
  rules: {
    'import/order': ['error'],
  },
};
