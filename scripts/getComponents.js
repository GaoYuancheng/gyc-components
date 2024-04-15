import fs from 'fs';
import path from 'path';

// const fs = require('fs');
// const path = require('path');

const fileExtensions = ['tsx', 'ts'];

// /Foo/index => tsx
const getFileExtension = (componentEntryPath) => {
  let res = '';
  for (let i = 0; i < fileExtensions.length; i++) {
    const totalPath = `${componentEntryPath}.${fileExtensions[i]}`;
    const isExist = fs.existsSync(totalPath);
    if (isExist) {
      res = fileExtensions[i];
      break;
    }
  }
  return res;
};

/**
 * 获取打包入口配置 Input
 * @param {string} componentsDir 路径
 * @returns
 */
const getComponentsInput = (componentsDir) => {
  let input = {};
  const realPath = path.resolve(componentsDir);

  const dir = fs.readdirSync(componentsDir);
  dir.forEach((item) => {
    const indexPath = path.resolve(realPath, item, 'index');
    const indexExtension = getFileExtension(indexPath);
    if (!indexExtension) {
      console.log(item, '未找到index文件');
      return;
    }
    const indexFile = `${indexPath}.${indexExtension}`;
    if (fs.existsSync(indexFile)) {
      input[`components/${item}/index.js`] = indexFile;
    }
  });
  console.log(input);
  return input;
};

// getComponentsInput('./src/components');
// getComponentsInput('./src/hooks');

export default getComponentsInput;

// module.exports = getComponentsInput;
