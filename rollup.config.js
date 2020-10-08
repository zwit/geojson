import pkg from './package.json';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    json()
  ]
}