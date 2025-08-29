---
title: StatisticsCard
group: # 分组
  title: 数据展示 # 所在分组的名称
---

# StatisticsCard 统计卡片

StatisticsCard 是一个基于 FormCard 的统计数据展示组件，用于展示带有图标的统计数字，支持表单筛选功能。

## 代码演示

<code src="./demo/base.tsx" description="基础用法">基础用法</code>

## API

| 参数       | 说明               | 类型                          | 默认值 |
| ---------- | ------------------ | ----------------------------- | ------ |
| request    | 获取数据的请求方法 | `(params) => Promise<Item[]>` | -      |
| params     | 额外的请求参数     | `Record<string, any>`         | -      |
| formItems  | 表单项配置         | `FormCardProps['formItems']`  | `[]`   |
| title      | 卡片标题           | `string`                      | -      |
| detailHref | 详情链接           | `string`                      | -      |

### Item

| 参数  | 说明       | 类型     | 默认值 |
| ----- | ---------- | -------- | ------ |
| label | 统计项标签 | `string` | -      |
| icon  | 统计项图标 | `string` | -      |
| value | 统计值     | `number` | -      |
| unit  | 单位       | `string` | -      |

其他属性请参考 [Card](https://ant.design/components/card-cn/)。

## 注意事项

1. StatisticsCard 组件内部会根据数据项数量自动调整布局：
   - 当数据项为 5 个时，第一个数据项会单独显示在左侧，其余 4 个显示在右侧 2×2 网格中
   - 其他情况下，所有数据项均显示在右侧网格中
2. 每个统计项包含图标、标签、数值和可选的单位。
3. 统计卡片的样式可以通过 index.less 文件进行自定义。
