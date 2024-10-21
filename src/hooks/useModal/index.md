---
group:
  title: hooks
  order: 2
---

# useModal

把 visible/open 等状态管理交给组件内部.
开发者只需关注业务逻辑

## 代码演示

### 基础用法

<code src="./demo/base.tsx"></code>

### 使用自定义的 content

<code src="./demo/customContent.tsx" description="通过open方法传参使用不同的 content"></code>

### 使用不同的 options

<code src="./demo/differentOptions.tsx" description="通过open方法传参使用不同的 options"></code>

## API

### Params

其余参数与 [Modal](https://ant.design/components/modal-cn/#Modal) 一致

| 参数          | 说明                 | 类型                                              | 默认值 |
| ------------- | -------------------- | ------------------------------------------------- | ------ |
| contentRender | content 区域渲染函数 | `(params: ContentRenderProps) => React.ReactNode` | -      |

### Result

| 参数     | 说明           | 类型                          | 默认值 |
| -------- | -------------- | ----------------------------- | ------ |
| open     | 打开弹窗的方法 | `(params: OpenProps) => void` | -      |
| close    | 关闭弹窗的方法 | `() => void`                  | -      |
| modalDom | 弹窗的 dom     | `React.ReactNode`             | -      |

### OpenProps

其余参数与 [Modal](https://ant.design/components/modal-cn/#Modal) 一致

| 参数 | 说明                                         | 类型                  | 默认值 |
| ---- | -------------------------------------------- | --------------------- | ------ |
| data | 传入 modal 的参数，会在 contentRender 中抛出 | `Record<string, any>` | -      |
