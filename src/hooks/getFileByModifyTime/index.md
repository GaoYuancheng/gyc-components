---
group:
  title: node-tools
  order: 1
---

# getFileByModifyTime

## 获取目录下 符合条件的文件

使用：
复制到当前目录下 使用 node 执行

以获取一年内有过提交的文件为例

1. fileDisplay 遍历当前目录 对文件进行判断处理
2. detectionFile 对遍历到的文件进行判断
3. 使用 git log 获取上一条提交记录 判断时间是否在指定时间范围内
4. 使用 fs.copyFile 把符合条件的文件放到目标文件夹中

```js | pure
// 1. 获取当前目录的 文件列表 根据 git log 获取最近一年内修改的文件
const child = require('child_process');
const now = new Date().getTime();

const fs = require('fs');
const path = require('path');

const targetDir = './targetDir';
// 一年
const diffTime = 365 * 24 * 60 * 60 * 1000;

if (fs.existsSync(targetDir)) {
  console.log(`${targetDir}已存在, 请先删除`);
  return;
}
fs.mkdirSync(targetDir);

const fileDisplay = (filePath) => {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err, '读取文件夹错误！');
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        // 跳过 node_modules 等无意义文件
        if (
          filename.includes('node_module') ||
          filename.includes('.git') ||
          filename.includes('.umi')
        )
          return;
        //获取当前文件的绝对路径
        let fileDir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(fileDir, function (error, stats) {
          if (error) {
            console.warn('获取文件stats失败', fileDir);
          } else {
            let isFile = stats.isFile(); //是文件
            let isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              detectionFile(fileDir, targetDir);
            }
            if (isDir) {
              fileDisplay(fileDir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
};

// 判断文件是否超出一年
const detectionFile = (filePath) => {
  child.exec(
    // 不能使用 %Y-%m-%d %H:%M:%S 会报错
    `git log -n 1 --date=format:'%Y-%m-%d-%H-%M-%S' ${filePath}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }

      const res = stdout.match(/\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}/);
      if (!res) return;
      const [matchRes] = res;
      const [year, month, day, h, m, s] = matchRes.split('-');
      const fileUpdateTime = new Date(
        `${year}-${month}-${day} ${h}:${m}:${s}`,
      ).getTime();
      const diff = now - fileUpdateTime;
      // 判断是否超过一年
      if (diff < diffTime) {
        const resFile = `${targetDir}/${filePath.replaceAll(/[\\|\/]/gi, '_')}`;
        fs.copyFile(`${filePath}`, resFile, (err) => {
          console.log(`${filePath} => ${resFile}`);
          if (err) {
            console.error(err);
            return;
          }
        });
      } else {
        // console.log('大于1年')
      }
    },
  );
};

fileDisplay('./');
```
