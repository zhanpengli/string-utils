import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      entryFileNames: '[name].js'
    },
    plugins: [nodeResolve()]
  },
  {
    input: 'src/index.js',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'auto',
      preserveModules: true,
      entryFileNames: '[name].cjs'
    },
    plugins: [nodeResolve()]
  }
];
