---
group:
  title: tools
  order: 2
---

# asyncPool

限制请求并发

<code src="./demo/base.tsx">基础用法</code>
| 参数 | 说明 | 类型 | 默认值 |
| -------------- | --------------------------- | --------------------------- | ------------- |
| promiseList | 必传，异步请求数组 | (() => Promise<any>)[] | - |
| limit | 必传，最大并发数 | number | - |
