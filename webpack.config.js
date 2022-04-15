import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  mode: 'development',
  entry: path.join(__dirname, './index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'puppies.js',
  },
};

export default config;
