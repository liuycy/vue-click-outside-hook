import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',

    external: ['vue'],

    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
    },

    plugins: [typescript()],
  },

  {
    input: 'src/index.ts',

    external: ['vue'],

    output: {
      file: 'dist/index.esm.prod.js',
      format: 'esm',
    },

    plugins: [
      typescript(),
      terser({
        ecma: 2015,
      }),
    ],
  },

  {
    input: 'src/index.ts',

    external: ['vue'],

    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },

    plugins: [typescript()],
  },

  {
    input: 'src/index.ts',

    external: ['vue'],

    output: {
      file: 'dist/index.cjs.prod.js',
      format: 'cjs',
    },

    plugins: [typescript(), terser()],
  },
];
