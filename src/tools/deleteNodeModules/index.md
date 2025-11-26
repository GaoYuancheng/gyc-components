---
group:
  title: node-tools
  order: 1
---

# deleteNodeModules

## 递归删除指定目录下所有名为 node_modules 的文件夹

```js | pure
// 1. 获取当前目录的 文件列表 根据 git log 获取最近一年内修改的文件
const fs = require('fs');
const path = require('path');

// 使用示例:
// 请将下面的路径替换为您要清理的实际路径
const targetDir = 'D:/git-repo-w/三局'; // 可以通过命令行参数传入路径，默认为当前目录

/**
 * 递归删除指定目录下所有名为node_modules的文件夹
 * @param {string} dir - 要搜索的根目录路径
 */
function deleteNodeModulesFolders(dir) {
  // 检查路径有效性
  if (!fs.existsSync(dir)) {
    console.error(`错误: 路径 "${dir}" 不存在`);
    return;
  }

  if (!fs.statSync(dir).isDirectory()) {
    console.error(`错误: "${dir}" 不是一个有效的目录`);
    return;
  }

  try {
    // 读取目录内容
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const itemPath = path.join(dir, item);

      // 检查是否为node_modules文件夹
      if (item === 'node_modules' && fs.statSync(itemPath).isDirectory()) {
        console.log(`正在删除: ${itemPath}`);
        deleteFolderRecursive(itemPath);
        console.log(`已删除: ${itemPath}`);
      }
      // 如果是目录，则递归处理
      else if (fs.statSync(itemPath).isDirectory()) {
        deleteNodeModulesFolders(itemPath);
      }
    });
  } catch (error) {
    console.error(`处理目录 "${dir}" 时出错:`, error.message);
  }
}

/**
 * 递归删除文件夹及其内容
 * @param {string} folderPath - 要删除的文件夹路径
 */
function deleteFolderRecursive(folderPath) {
  if (!fs.existsSync(folderPath)) {
    return;
  }

  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const itemPath = path.join(folderPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      deleteFolderRecursive(itemPath);
    } else {
      fs.unlinkSync(itemPath);
    }
  });

  // 删除空文件夹
  fs.rmdirSync(folderPath);
}

console.log(
  `开始搜索并删除 "${targetDir}" 目录下的所有 node_modules 文件夹...`,
);
deleteNodeModulesFolders(targetDir);
console.log('操作完成!');
```
