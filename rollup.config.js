//https://www.rollupjs.com/configuration-options/

// https://juejin.cn/post/7313557322596171815
// (!) Plugin typescript: @rollup/plugin-typescript TS2354: This syntax requires an imported helper but module 'tslib' cannot be found.
//https://juejin.cn/post/7136104350912348174#heading-0

const resolve = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const clear = require('rollup-plugin-clear');

const outDir = 'rollupDist';

/**@type {import('rollup').RollupOptions} */
module.exports = {
  // input: ['./src/index.ts', './src/components/GSelect/index.tsx'],
  input: {
    // TODO: 使用脚本确定 input
    'index.js': 'src/index.ts',
    'components/GSelect/index.js': 'src/components/GSelect/index.tsx',
    'components/ClickWrap/index.js': 'src/components/ClickWrap/index.tsx',
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
    // TODO: 使用copy插件 复制index
    postcss({
      use: ['sass', ['less', { javascriptEnabled: true }]],
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
  context: '',
  external: ['react', 'react-dom', 'antd'],
};
