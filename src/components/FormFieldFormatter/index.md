---
title: FormFieldFormatter # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
# group: # 分组
#   title: 高级组件 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
---

# FormFieldFormatter

支持 antd Form 的表单字段的格式化； 可以少封装一个组件减少复杂度

<code src="./demo/base.tsx" description="通过一个Select获取多个参数">通过一个 Select 获取多个参数</code>

## API

| 参数           | 说明                                   | 类型                        | 默认值 |
| -------------- | -------------------------------------- | --------------------------- | ------ |
| value          | 表单组件透传的 value                   | any                         | -      |
| onChange       | 表单组件透传的 onChange                | any                         | -      |
| formatOnChange | 在组件调用表单的 onChange 之前进行处理 | (value: arguments[]) => any | -      |
| formatValue    | 在组件接受表单的 value 之前进行处理    | (value: any) => any         | -      |
