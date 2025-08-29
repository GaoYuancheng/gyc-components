---
title: FormCard # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 数据展示 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
---

# FormCard 表单卡片

FormCard 是一个集成了表单筛选和数据展示功能的卡片组件，可以通过表单控制数据请求，并自定义内容展示。

## 代码演示

<code src="./demo/base.tsx" description="基础用法">基础用法</code>

## API

| 参数           | 说明               | 类型                                                                                              | 默认值 |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------- | ------ |
| request        | 获取数据的请求方法 | `(params) => Promise<any>`                                                                        | -      |
| params         | 额外的请求参数     | `Record<string, any>`                                                                             | -      |
| formItems      | 表单项配置         | `Array<{label?: string; name: string; children: React.ReactNode; formItemProps?: FormItemProps}>` | `[]`   |
| childrenRender | 自定义内容渲染函数 | `(data) => React.ReactNode`                                                                       | -      |
| detailHref     | 详情链接           | `string`                                                                                          | -      |

其他属性请参考 [Card](https://ant.design/components/card-cn/)。

## 注意事项

1. FormCard 组件会在表单值变化时自动触发 request 请求。
2. 表单项使用 Form.Item 包裹，支持 Ant Design 的表单校验功能。
3. childrenRender 函数接收 request 返回的数据作为参数，用于自定义内容展示。
4. 卡片内容区域默认高度为 250px。
