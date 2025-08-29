---
title: Foo # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 示例 # 所在分组的名称
  order: 9999 # 分组排序，值越小越靠前
---

# Foo

This is an example component.

```jsx
import { Foo } from 'gyc-components';

export default () => <Foo title="Hello dumi!" />;
```
