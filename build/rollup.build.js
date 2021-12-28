import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import path from 'path';


export default {
  input: './src/index.tsx',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/bundle.es.js',
      format: 'esm',
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'GrpReactUI'
    }
  ],
  plugins: [
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.{ts,tsx,js,jsx}'],
    }),
    json(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigDefaults: {
        compilerOptions: {
          declaration: true,
          declarationDir: "dist/types",
        }
      }
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano(),
      ],
      extract: 'css/index.css',
    }),
    alias({
      entries: [
        { find: '@', replacement: path.join(__dirname, 'src') },
      ],
    }),
    terser()
  ]
}