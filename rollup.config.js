//https://www.rollupjs.com/configuration-options/

// (!) Plugin typescript: @rollup/plugin-typescript TS2354: This syntax requires an imported helper but module 'tslib' cannot be found.
//https://juejin.cn/post/7136104350912348174#heading-0

const resolve = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');

/**@type {import('rollup').RollupOptions} */
module.exports = {
  input: './src/index.ts',
  output: {
    dir: './rollupDist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true, // 分离打包 每个组件一个js
    preserveModulesRoot: './src',
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss(),
    typescript({
      compilerOptions: {
        outDir: './rollupDist',
      },
    }),
    babel({
      presets: ['@babel/preset-react'],
      exclude: /node_module/,
    }),
  ],
  external: ['react', 'react-dom', 'antd'],
};
