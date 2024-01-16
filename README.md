# gyc-components

[![NPM version](https://img.shields.io/npm/v/gyc-components.svg?style=flat)](https://npmjs.org/package/gyc-components)
[![NPM downloads](http://img.shields.io/npm/dm/gyc-components.svg?style=flat)](https://npmjs.org/package/gyc-components)

A react library developed with dumi
部分组件基于 antd4 开发

## Usage

TODO

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# check your project for potential problems
$ pnpm run doctor
```

## TODO

[ x ] github action && github pages

[ ] antd5 降级成 antd4

- 在.dumi/global.less 中手动引用样式

[ ] 基于 antd4 的 colorPicker 组件

[ ] publicPath 调整 目前点击到组件会直接到 /components 需要调整为 /gyc-components/components

[ ] 部署上去 首页展示不出

[ ] dumi 无法把 less 打包到 js 中 导致外部项目必须要装 less 后续考虑换成别的打包工具 dumi 只做组件库的文档展示
