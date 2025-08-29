---
title: ChartCard # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 数据展示 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
---

# ChartCard 图表卡片

ChartCard 是一个基于 FormCard 的图表展示组件，用于在卡片中展示 ECharts 图表，支持表单筛选功能。

## 代码演示

<code src="./demo/base.tsx" description="基础用法">基础用法</code>

<code src="./demo/pie.tsx" description="饼图示例">饼图示例</code>

## API

| 参数       | 说明               | 类型                                 | 默认值 |
| ---------- | ------------------ | ------------------------------------ | ------ |
| request    | 获取数据的请求方法 | `(params) => Promise<EChartsOption>` | -      |
| params     | 额外的请求参数     | `Record<string, any>`                | -      |
| formItems  | 表单项配置         | `FormCardProps['formItems']`         | `[]`   |
| title      | 卡片标题           | `string`                             | -      |
| detailHref | 详情链接           | `string`                             | -      |

其他属性请参考 [Card](https://ant.design/components/card-cn/)。

## 注意事项

1. ChartCard 组件内部使用 BaseECharts 组件渲染图表，图表高度默认为 200px。
2. 请确保 request 函数返回的是有效的 ECharts 配置项。
3. 可以使用 `_data.ts` 中提供的公共配置来简化图表配置。
