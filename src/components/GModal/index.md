---
title: GModal # 组件的标题，会在菜单侧边栏展示
demo:
  cols: 2
toc: content # 在页面右侧展示锚点链接
# group: # 分组
#   title: 高级组件 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
---

# GModal

使用 React.createPortal 创建弹窗 并且挂载到指定的节点

<code src="./demo/base/index" description="基础使用">基础用法</code>
<code src="./demo/customPosition/index" description="自定义top,left">自定义 top,left</code>
<code src="./demo/maskClosable/index" description="使用 ClickWrap 组件实现点击弹窗外区域关闭">点击弹窗外区域关闭</code>

## API

| 参数           | 说明                        | 类型                        | 默认值        |
| -------------- | --------------------------- | --------------------------- | ------------- |
| open           | 对话框是否可见              | boolean                     | true          |
| onClose        | 点击右上角的 x 号调用的方法 | (e) => void                 | -             |
| className      | 弹窗的 className            |                             | -             |
| title          | 弹窗标题                    |                             | -             |
| style          | 弹窗样式对象                |                             | -             |
| targetNode     | 指定弹窗挂载的节点          | (HTMLElement) => Element => | document.body |
| afterClose     | 弹窗关闭后调用的方法        |                             | -             |
| destroyOnClose | 关闭后是否销毁弹窗          |                             | true          |
