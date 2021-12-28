import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import alias from '@rollup/plugin-alias';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { eslint } from 'rollup-plugin-eslint';
import path from 'path';


export default {
  input: './example/index.tsx',
  output: {
    file: 'example/dist/bundle.es.js',
    format: 'esm',
  },
  plugins: [
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.{ts,tsx,js,jsx}'],
    }),
    json(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
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
    serve({
      contentBase: path.join(__dirname, '../example'),
      port: 8020,
    }),
    livereload('example/dist'),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    alias({
      entries: [
        { find: '@', replacement: path.join(__dirname, 'src') },
      ],
    }),
  ]
}