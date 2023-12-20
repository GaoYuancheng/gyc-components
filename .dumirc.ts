import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'tool', dir: 'src/tools' },
      { type: 'hook', dir: 'src/hooks' },
    ],
  },
  themeConfig: {
    name: 'gyc-components',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/g-select' }, // components会默认自动对应到src文件夹
      { title: 'hooks', link: '/hooks/use-hook1' }, // components会默认自动对应到src文件夹
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 300px !important;
    }`,
  ],
});
