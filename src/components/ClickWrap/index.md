---
title: ClickWrap # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
# group: # 分组
#   title: 高级组件 # 所在分组的名称
#   order: 1 # 分组排序，值越小越靠前
---

# ClickWrap

给组件内容外绑定上 onClick 事件，常用于包裹弹窗等 脱离文档之外的组件.

通过 ReactClone 直接在 children 上绑定 onMouseLeave 和 onMouseEnter 可以减少一层 div

<code src="./demo/base.tsx" description="基础用法">基础用法</code>

```jsx
import React from 'react';
export default () => (
  <>
    <div>也可以通过 判断 e.contains 实现 </div>
    <div>参考 ahooks 的 useClickAway</div>
  </>
);
```

## API
