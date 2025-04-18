//https://www.rollupjs.com/configuration-options/

// https://juejin.cn/post/7313557322596171815
// (!) Plugin typescript: @rollup/plugin-typescript TS2354: This syntax requires an imported helper but module 'tslib' cannot be found.
//https://juejin.cn/post/7136104350912348174#heading-0

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import getComponentsInput from './scripts/getComponents';

const outDir = 'rollupDist';
const componentInput = getComponentsInput('./src/components');
const hooksInput = getComponentsInput('./src/hooks');

export default defineConfig({
  // input: ['./src/index.ts', './src/components/GSelect/index.tsx'],
  input: {
    ...componentInput,
    ...hooksInput,
    'index.js': 'src/index.ts',
    // 'index.js': 'src/index.ts',

    // 'components/GSelect/index.js': 'src/components/GSelect/index.tsx',
    // 'components/ClickWrap/index.js': 'src/components/ClickWrap/index.tsx',
  },
  output: {
    entryFileNames: '[name]',
    dir: outDir,
    format: 'esm',
    // sourcemap: true,
    // preserveModules: true, // 分离打包 每个组件一个js
    // preserveModulesRoot: './src',
    // manualChunks: {
    //   // 手动指定chunk
    // antd: ['antd'],
    // },
  },
  plugins: [
    // copy({
    //   targets: [
    //     { src: 'src/index.ts', dest: `${outDir}` }, // 复制整个目录
    //   ],
    // }),
    postcss({
      // use: ['sass', ['less', { javascriptEnabled: true }]],
      extensions: ['less'],
      // use: ['sass', 'less'],
    }),
    typescript({
      compilerOptions: {
        outDir,
      },
      tsconfig: './tsconfig.build.json',
      include: ['src/**/*'],
    }),
    babel({
      presets: ['@babel/preset-env'],
      exclude: /node_module/,
      babelHelpers: 'bundled',
    }),
    resolve(),
    commonjs(),
    // resolve({
    //   exportConditions: ['import'],
    //   dedupe: ['react', 'react-dom'],
    // }),
    clear({
      targets: [outDir],
    }),
  ],
  external: ['react', 'react-dom', 'antd', 'echarts'],
});
