---
title: FileList # 组件的标题，会在菜单侧边栏展示
group: # 分组
  title: 数据展示 # 所在分组的名称
demo:
  cols: 2
---

# FileList

通用文件 文件列表组件
FileList 和 FileItem 是两个组件，FileList 是文件列表组件，FileItem 是文件项组件

- 多字段兼容 （ex. 传入 uuid fileUuid fileuuid 都可以表示 uuid）
- 支持 size 单位转换 B K M G

## 示例

<code src="./demo/base" description="常用详情页文件列表展示，文件大小单位转换">基础用法</code>
<code src="./demo/actions" description="支持设置actions，download自带下载交互，也可以自定义">操作按钮</code>
<code src="./demo/multipleKeys" description="支持多字段兼容">多字段兼容</code>
<code src="./demo/fileItemBase" description="单独使用FileItem">单独使用 FileItem</code>

## API

| 属性名          | 类型                              | 描述           |
| --------------- | --------------------------------- | -------------- |
| fileInfo        | `FileInfo`                        | 文件信息       |
| fileNameOnClick | `(fileInfo: FileInfo) => void`    | 文件名点击事件 |
| actions         | `ActionType \| FileActionsType[]` | 文件操作按钮   |
| options         | `FileItemOptions`                 | 展示配置       |

### FileInfo

兼容多个字段，无需处理

| 属性名                         | 类型     | 描述      |
| ------------------------------ | -------- | --------- |
| `fileUuid \| fileuuid \| uuid` | `string` | 文件 uuid |
| `fileName \| filename \| name` | `string` | 文件名    |
| `fileSize \| filesize \| size` | `number` | 文件大小  |
| `fileUrl \| fileurl \| url`    | `string` | 文件 url  |

```ts
interface FileItemOptions {
  fileSize?: {
    // 文件大小单位 B K M G 默认 B
    unit?: Unit;
    // 文件大小最终单位 B K M G 默认  K
    finalUnit?: Unit;
  };
}

interface FileActionsType {
  /** 操作类型 */
  type?: ActionType;
  /** 操作点击事件 */
  onClick?: (fileInfo: FileInfo) => void;
  /** 自定义渲染 */
  render?: (fileInfo: FileInfo) => React.ReactNode;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否显示 */
  visible?: (fileInfo: FileInfo) => boolean;
}
```
