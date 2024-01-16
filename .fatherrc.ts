import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'esm',
    ignores: [
      'src/**/demo/**', // 避免打包demo文件到npm包里面
    ],
    // transformer: 'babel',
  },
  cjs: {
    output: 'lib',
    ignores: [
      'src/**/demo/**', // 避免打包demo文件到npm包里面
    ],
  },
  umd: {
    output: 'umd',
  },
});
