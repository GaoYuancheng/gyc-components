---
group:
  title: hooks
  order: 2
---

# useModal

命令式弹窗用法

把 visible/open 等状态管理交给组件内部.
开发者只需关注业务逻辑

## 代码演示

### 基础用法

打开弹窗 并且在 onOk 时获取 state 状态

<code src="./demo/base.tsx"></code>

### 使用不同的 options 及 data

<code src="./demo/addOrEdit.tsx" description="通过open方法传参使用不同的 options"></code>

## API

### Params

| 参数           | 说明                            | 类型                | 默认值 |
| -------------- | ------------------------------- | ------------------- | ------ |
| ModalComponent | 弹窗组件`<Modal>{...}</ Modal>` | `React.ElementType` | -      |
| modalOptions   | 弹窗组件的公共参数              | `ModalOptions`      | -      |

### Result

| 参数         | 说明             | 类型                             | 默认值 |
| ------------ | ---------------- | -------------------------------- | ------ |
| open         | 打开弹窗的方法   | `(params: ModalOptions) => void` | -      |
| close        | 关闭弹窗的方法   | `() => void`                     | -      |
| modalDom     | 弹窗的 dom       | `React.ReactNode`                | -      |
| modalOptions | 弹窗接受到的参数 | `ModalOptions`                   | -      |

### ModalOptions

[Modal](https://ant.design/components/modal-cn/#Modal) & ModalComponent 组件参数
