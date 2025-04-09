import path from 'path'

export default {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve('./', 'dist'),
  },
};