import path from 'path'

export default {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve('./', 'dist'),
  },
};