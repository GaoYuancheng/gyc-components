---
title: BaseECharts # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 数据展示 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
---

# BaseECharts 图表组件

BaseECharts 是对 ECharts 的 React 封装组件，提供了更简单的配置方式和自动响应式调整功能。

## 特性

- 简化 ECharts 的初始化和配置过程
- 自动处理图表的响应式调整
- 支持事件绑定
- 自动在组件卸载时销毁实例，避免内存泄漏
- 当配置或大小变化时自动更新图表

## 代码演示

<code src="./demo/base.tsx" description="基础用法">基础用法</code>

<code src="./demo/events.tsx" description="事件处理">事件处理</code>

## API

| 参数         | 说明             | 类型                                             | 默认值                           |
| ------------ | ---------------- | ------------------------------------------------ | -------------------------------- |
| options      | ECharts 配置项   | `EChartsOption`                                  | -                                |
| style        | 容器样式         | `React.CSSProperties`                            | `{ height: 300, width: '100%' }` |
| className    | 容器类名         | `string`                                         | -                                |
| onChartReady | 图表准备就绪回调 | `(echartsInstance?: ECharts) => void`            | -                                |
| onEvents     | 事件处理对象     | `{ [eventName: string]: (params: any) => void }` | -                                |

## 注意事项

1. 组件内部使用 `useSize` hook 监听容器大小变化，当容器大小变化时会自动调整图表大小。
2. 当 `options` 变化时，组件会自动清除并重新设置图表配置。
3. 当事件处理函数 `onEvents` 变化时，组件会重新绑定事件。
4. 为了避免不必要的重渲染，建议将 `options` 对象使用 `useMemo` 缓存。
