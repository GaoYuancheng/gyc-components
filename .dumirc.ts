import { defineConfig } from 'dumi';

const { NODE_ENV } = process.env;
//development
//production

const pathPrefix = NODE_ENV === 'production' ? '/gyc-components/' : '/';
// const pathPrefix = '/gyc-components/';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: `${pathPrefix}`,
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
      { title: '组件', link: '/components/foo' }, // components会默认自动对应到src文件夹
      { title: 'hooks', link: '/hooks/use-hook1' }, // components会默认自动对应到src文件夹
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 300px !important;
    }`,
  ],
});
