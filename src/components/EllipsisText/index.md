---
title: EllipsisText # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 数据展示 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
demo:
  cols: 2
---

# EllipsisText

支持省略号显示和 tooltip 展示全部内容的文本组件。

## 示例

<code src="./demo/base.tsx" description="基础用法">基础用法</code>
<code src="./demo/multiLine.tsx" description="支持多行文本省略">多行省略</code>
<code src="./demo/customTooltip.tsx" description="自定义 Tooltip 内容和位置">自定义 Tooltip</code>
<code src="./demo/disableTooltip.tsx" description="禁用 Tooltip 显示">禁用 Tooltip</code>

## API

| 参数         | 说明             | 类型                | 默认值   |
| ------------ | ---------------- | ------------------- | -------- |
| children     | 文本内容         | React.ReactNode     | -        |
| className    | 自定义类名       | string              | -        |
| style        | 自定义样式       | React.CSSProperties | -        |
| maxLines     | 最大行数         | number              | 1        |
| showTooltip  | 是否显示 tooltip | boolean             | true     |
| tooltipTitle | tooltip 的标题   | React.ReactNode     | children |
| tooltipProps | tooltip 的配置   | any                 | -        |
