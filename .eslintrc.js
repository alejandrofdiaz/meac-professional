module.exports = {
  extends: ['@afrias'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
