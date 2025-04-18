import { defineConfig } from 'father';

export default defineConfig({
  // lessInBabelMode: true
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'esm',
    ignores: [
      'src/**/demo/**', // 避免打包 demo 文件到npm包里面
      'src/utils/**', // 避免打包 utils 文件到npm包里面
    ],
  },
  // cjs: {
  //   output: 'lib',
  //   ignores: [
  //     'src/**/demo/**', // 避免打包 demo 文件到npm包里面
  //   ],
  // },
  // umd: {
  //   output: 'umd',
  // externals: {
  //   react: 'react',
  //   antd: 'antd',
  // },
  // },
});
