import buble from 'rollup-plugin-buble';
export default {
  input: './index.js',
  output: {
    file: './umd/format.js',
    format: 'umd',
    name: 'format'
  },
  plugins: [buble()]
};