import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

const banner = `/*
clsnm v${pkg.version}
https://github.com/atomita/clsnm
Released under the MIT License.
*/`;

export default {
  input: 'src/clsnm.ts',
  output: {
    file: 'dist/clsnm.js',
    format: 'umd',
    name: 'clsnm',
    sourceMap: true,
    banner,
  },
  plugins: [typescript({
    exclude: [
      'tests/*',
      '*.d.ts',
      '**/*.d.ts',
      '*.test.ts',
      '**/*.test.ts',
      '*.test.tsx',
      '**/*.test.tsx'
    ]
  })]
}
