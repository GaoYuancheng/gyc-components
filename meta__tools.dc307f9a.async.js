"use strict";(self.webpackChunkgyc_components=self.webpackChunkgyc_components||[]).push([[8024],{4863:function(s,e,n){n.r(e),n.d(e,{demos:function(){return c}});var t=n(13448),r=n.n(t),d=n(74815),i=n.n(d),a=n(50959),c={"src-tools-async-pool-demo-base":{component:a.memo(a.lazy(function(){return n.e(2433).then(n.bind(n,88679))})),asset:{type:"BLOCK",id:"src-tools-async-pool-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(92086).Z},"gyc-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{"gyc-components":n(14179),react:n(50959)},renderOpts:{compile:function(){var u=i()(r()().mark(function f(){var l,p=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(648).then(n.bind(n,90648));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,p));case 3:case"end":return o.stop()}},f)}));function m(){return u.apply(this,arguments)}return m}()}}}},10519:function(s,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(50959),r={}},5149:function(s,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(50959),r={}},6177:function(s,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(50959),r={}},14782:function(s,e,n){n.r(e),n.d(e,{demos:function(){return c}});var t=n(13448),r=n.n(t),d=n(74815),i=n.n(d),a=n(50959),c={"tool1-demo-base":{component:a.memo(a.lazy(function(){return n.e(2125).then(n.bind(n,25225))})),asset:{type:"BLOCK",id:"tool1-demo-base",refAtomIds:["tool1"],dependencies:{"index.tsx":{type:"FILE",value:n(55261).Z},react:{type:"NPM",value:"18.2.0"},"../index.tsx":{type:"FILE",value:n(69468).Z}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:n(50959),"../index.tsx":n(93795)},renderOpts:{compile:function(){var u=i()(r()().mark(function f(){var l,p=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(648).then(n.bind(n,90648));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,p));case 3:case"end":return o.stop()}},f)}));function m(){return u.apply(this,arguments)}return m}()}}}},73135:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u9650\u5236\u8BF7\u6C42\u5E76\u53D1",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1},{value:"\u8BF4\u660E",paraId:1},{value:"\u7C7B\u578B",paraId:1},{value:"\u9ED8\u8BA4\u503C",paraId:1},{value:"promiseList",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u5F02\u6B65\u8BF7\u6C42\u6570\u7EC4",paraId:1},{value:"(() => Promise",paraId:1},{value:")[]",paraId:1},{value:"-",paraId:1},{value:"limit",paraId:1},{value:"\u5FC5\u4F20\uFF0C\u6700\u5927\u5E76\u53D1\u6570",paraId:1},{value:"number",paraId:1},{value:"-",paraId:1}]},75974:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`// 1. \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u7684 \u6587\u4EF6\u5217\u8868 \u6839\u636E git log \u83B7\u53D6\u6700\u8FD1\u4E00\u5E74\u5185\u4FEE\u6539\u7684\u6587\u4EF6
const fs = require('fs');
const path = require('path');

// \u4F7F\u7528\u793A\u4F8B:
// \u8BF7\u5C06\u4E0B\u9762\u7684\u8DEF\u5F84\u66FF\u6362\u4E3A\u60A8\u8981\u6E05\u7406\u7684\u5B9E\u9645\u8DEF\u5F84
const targetDir = 'D:/git-repo-w/\u4E09\u5C40'; // \u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u4F20\u5165\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u76EE\u5F55

/**
 * \u9012\u5F52\u5220\u9664\u6307\u5B9A\u76EE\u5F55\u4E0B\u6240\u6709\u540D\u4E3Anode_modules\u7684\u6587\u4EF6\u5939
 * @param {string} dir - \u8981\u641C\u7D22\u7684\u6839\u76EE\u5F55\u8DEF\u5F84
 */
function deleteNodeModulesFolders(dir) {
  // \u68C0\u67E5\u8DEF\u5F84\u6709\u6548\u6027
  if (!fs.existsSync(dir)) {
    console.error(\`\u9519\u8BEF: \u8DEF\u5F84 "\${dir}" \u4E0D\u5B58\u5728\`);
    return;
  }

  if (!fs.statSync(dir).isDirectory()) {
    console.error(\`\u9519\u8BEF: "\${dir}" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u76EE\u5F55\`);
    return;
  }

  try {
    // \u8BFB\u53D6\u76EE\u5F55\u5185\u5BB9
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const itemPath = path.join(dir, item);

      // \u68C0\u67E5\u662F\u5426\u4E3Anode_modules\u6587\u4EF6\u5939
      if (item === 'node_modules' && fs.statSync(itemPath).isDirectory()) {
        console.log(\`\u6B63\u5728\u5220\u9664: \${itemPath}\`);
        deleteFolderRecursive(itemPath);
        console.log(\`\u5DF2\u5220\u9664: \${itemPath}\`);
      }
      // \u5982\u679C\u662F\u76EE\u5F55\uFF0C\u5219\u9012\u5F52\u5904\u7406
      else if (fs.statSync(itemPath).isDirectory()) {
        deleteNodeModulesFolders(itemPath);
      }
    });
  } catch (error) {
    console.error(\`\u5904\u7406\u76EE\u5F55 "\${dir}" \u65F6\u51FA\u9519:\`, error.message);
  }
}

/**
 * \u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939\u53CA\u5176\u5185\u5BB9
 * @param {string} folderPath - \u8981\u5220\u9664\u7684\u6587\u4EF6\u5939\u8DEF\u5F84
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

  // \u5220\u9664\u7A7A\u6587\u4EF6\u5939
  fs.rmdirSync(folderPath);
}

console.log(
  \`\u5F00\u59CB\u641C\u7D22\u5E76\u5220\u9664 "\${targetDir}" \u76EE\u5F55\u4E0B\u7684\u6240\u6709 node_modules \u6587\u4EF6\u5939...\`,
);
deleteNodeModulesFolders(targetDir);
console.log('\u64CD\u4F5C\u5B8C\u6210!');
`,paraId:0,tocIndex:1}]},50661:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u628A npm \u5305\u4E0A\u4F20\u5230 nexus npm \u4ED3\u5E93",paraId:0,tocIndex:0},{value:`\u{1F4E6}nexus-npm
\u2523 \u{1F4C2}scripts
\u2503 \u2517 \u{1F4DC}downloadAndUploadToNexus.sh
\u2523 \u{1F4DC}package-lock.json
\u2523 \u{1F4DC}package.json
\u2517 \u{1F4DC}README.md
`,paraId:1,tocIndex:1},{value:`TGZ_NAME=tgz2
# \u4ED3\u5E93\u5730\u5740
REPO_URL="http://xxx/service/rest/v1/components?repository=npm-hosted"
USERNAME=xx
PASSWORD=xxx
LOG_FILE="upload_to_nexus.log"

echo "\u6B63\u5728\u5220\u9664 node_modules"
rm -rf node_modules
echo "\u6B63\u5728\u5220\u9664 package-lock.json"
rm -rf package-lock.json
echo "\u6B63\u5728\u5220\u9664 tarballs"
rm -rf tarballs
echo "\u6B63\u5728\u5220\u9664 $TGZ_NAME"
rm -rf "$TGZ_NAME"

npm i

download-tgz package-lock package-lock.json

mkdir "$TGZ_NAME"
# \u8FD9\u53E5\u8BDD\u7684\u4F5C\u7528\u662F\uFF1A\u5728 tarballs \u76EE\u5F55\u4E0B\u67E5\u627E\u6240\u6709\u6269\u5C55\u540D\u4E3A .tgz \u7684\u6587\u4EF6\uFF0C\u5E76\u628A\u5B83\u4EEC\u590D\u5236\u5230 ./tgz2 \u76EE\u5F55\u4E2D\uFF08\u5982\u679C\u540C\u540D\u6587\u4EF6\u5B58\u5728\u5219\u8986\u76D6\uFF09\u3002

echo "\u6B63\u5728\u590D\u5236\u5230 $TGZ_NAME"
find ./tarballs -name '*.tgz' -exec cp -f {} "./$TGZ_NAME" \\;

echo "\u590D\u5236\u5B8C\u6210 $TGZ_NAME"


# \u4E0A\u4F20\u5230 Nexus
# find \u5E76\u6279\u91CF\u4E0A\u4F20

count=0
total=$(find "./$TGZ_NAME" -type f -name '*.tgz' | wc -l)
find "./$TGZ_NAME" -type f -name '*.tgz' | sed "s|^\\./||" | while read tgz_file; do
  # \u5E76\u4E14\u8BB0\u5F55\u4E0A\u4F20\u5E8F\u53F7
  count=$((count+1))
  echo "Uploading $tgz_file ($count/$total) ..."
  curl -u "$USERNAME:$PASSWORD" -X 'POST' -v \\
    \${REPO_URL} \\
    -H 'accept: application/json' \\
    -H 'Content-Type: multipart/form-data' \\
    -F "npm.asset=@\${tgz_file};type=application/x-compressed"
  if [ $? -eq 0 ]; then
    echo "Upload of $tgz_file succeeded."
  else
    echo "Upload of $tgz_file FAILED!" | tee -a "$LOG_FILE"
  fi
done

`,paraId:2,tocIndex:2},{value:"npm i node-tgz-downloader -g \u5B89\u88C5 node-tgz-downloader\uFF0C\u7528\u6765\u4E0B\u8F7D\u4F9D\u8D56\u7684 tgz \u6587\u4EF6",paraId:3,tocIndex:3},{value:"npm install xxx \u4E0B\u8F7D\u76F8\u5173\u4F9D\u8D56",paraId:3,tocIndex:3},{value:"download-tgz package-lock package-lock.json",paraId:3,tocIndex:3},{value:"./scripts/downloadAndUplodToNexus.sh",paraId:3,tocIndex:3},{value:"./scripts/downloadAndUplodToNexus.sh",paraId:4,tocIndex:4}]},61226:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`\u4F7F\u7528\uFF1A
\u590D\u5236\u5230\u5F53\u524D\u76EE\u5F55\u4E0B \u4F7F\u7528 node \u6267\u884C`,paraId:0,tocIndex:1},{value:"\u4EE5\u83B7\u53D6\u4E00\u5E74\u5185\u6709\u8FC7\u63D0\u4EA4\u7684\u6587\u4EF6\u4E3A\u4F8B",paraId:1,tocIndex:1},{value:"fileDisplay \u904D\u5386\u5F53\u524D\u76EE\u5F55 \u5BF9\u6587\u4EF6\u8FDB\u884C\u5224\u65AD\u5904\u7406",paraId:2,tocIndex:1},{value:"detectionFile \u5BF9\u904D\u5386\u5230\u7684\u6587\u4EF6\u8FDB\u884C\u5224\u65AD",paraId:2,tocIndex:1},{value:"\u4F7F\u7528 git log \u83B7\u53D6\u4E0A\u4E00\u6761\u63D0\u4EA4\u8BB0\u5F55 \u5224\u65AD\u65F6\u95F4\u662F\u5426\u5728\u6307\u5B9A\u65F6\u95F4\u8303\u56F4\u5185",paraId:2,tocIndex:1},{value:"\u4F7F\u7528 fs.copyFile \u628A\u7B26\u5408\u6761\u4EF6\u7684\u6587\u4EF6\u653E\u5230\u76EE\u6807\u6587\u4EF6\u5939\u4E2D",paraId:2,tocIndex:1},{value:`// 1. \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u7684 \u6587\u4EF6\u5217\u8868 \u6839\u636E git log \u83B7\u53D6\u6700\u8FD1\u4E00\u5E74\u5185\u4FEE\u6539\u7684\u6587\u4EF6
const child = require('child_process');
const now = new Date().getTime();

const fs = require('fs');
const path = require('path');

const targetDir = './targetDir';
// \u4E00\u5E74
const diffTime = 365 * 24 * 60 * 60 * 1000;

if (fs.existsSync(targetDir)) {
  console.log(\`\${targetDir}\u5DF2\u5B58\u5728, \u8BF7\u5148\u5220\u9664\`);
  return;
}
fs.mkdirSync(targetDir);

const fileDisplay = (filePath) => {
  //\u6839\u636E\u6587\u4EF6\u8DEF\u5F84\u8BFB\u53D6\u6587\u4EF6\uFF0C\u8FD4\u56DE\u6587\u4EF6\u5217\u8868
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err, '\u8BFB\u53D6\u6587\u4EF6\u5939\u9519\u8BEF\uFF01');
    } else {
      //\u904D\u5386\u8BFB\u53D6\u5230\u7684\u6587\u4EF6\u5217\u8868
      files.forEach(function (filename) {
        // \u8DF3\u8FC7 node_modules \u7B49\u65E0\u610F\u4E49\u6587\u4EF6
        if (
          filename.includes('node_module') ||
          filename.includes('.git') ||
          filename.includes('.umi')
        )
          return;
        //\u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84
        let fileDir = path.join(filePath, filename);
        //\u6839\u636E\u6587\u4EF6\u8DEF\u5F84\u83B7\u53D6\u6587\u4EF6\u4FE1\u606F\uFF0C\u8FD4\u56DE\u4E00\u4E2Afs.Stats\u5BF9\u8C61
        fs.stat(fileDir, function (error, stats) {
          if (error) {
            console.warn('\u83B7\u53D6\u6587\u4EF6stats\u5931\u8D25', fileDir);
          } else {
            let isFile = stats.isFile(); //\u662F\u6587\u4EF6
            let isDir = stats.isDirectory(); //\u662F\u6587\u4EF6\u5939
            if (isFile) {
              detectionFile(fileDir, targetDir);
            }
            if (isDir) {
              fileDisplay(fileDir); //\u9012\u5F52\uFF0C\u5982\u679C\u662F\u6587\u4EF6\u5939\uFF0C\u5C31\u7EE7\u7EED\u904D\u5386\u8BE5\u6587\u4EF6\u5939\u4E0B\u9762\u7684\u6587\u4EF6
            }
          }
        });
      });
    }
  });
};

// \u5224\u65AD\u6587\u4EF6\u662F\u5426\u8D85\u51FA\u4E00\u5E74
const detectionFile = (filePath) => {
  child.exec(
    // \u4E0D\u80FD\u4F7F\u7528 %Y-%m-%d %H:%M:%S \u4F1A\u62A5\u9519
    \`git log -n 1 --date=format:'%Y-%m-%d-%H-%M-%S' \${filePath}\`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }

      const res = stdout.match(/\\d{4}-\\d{2}-\\d{2}-\\d{2}-\\d{2}-\\d{2}/);
      if (!res) return;
      const [matchRes] = res;
      const [year, month, day, h, m, s] = matchRes.split('-');
      const fileUpdateTime = new Date(
        \`\${year}-\${month}-\${day} \${h}:\${m}:\${s}\`,
      ).getTime();
      const diff = now - fileUpdateTime;
      // \u5224\u65AD\u662F\u5426\u8D85\u8FC7\u4E00\u5E74
      if (diff < diffTime) {
        const resFile = \`\${targetDir}/\${filePath.replaceAll(/[\\\\|\\/]/gi, '_')}\`;
        fs.copyFile(\`\${filePath}\`, resFile, (err) => {
          console.log(\`\${filePath} => \${resFile}\`);
          if (err) {
            console.error(err);
            return;
          }
        });
      } else {
        // console.log('\u5927\u4E8E1\u5E74')
      }
    },
  );
};

fileDisplay('./');
`,paraId:3,tocIndex:1}]},32177:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},92086:function(s,e){e.Z=`import { asyncPool } from 'gyc-components';
import React, { useEffect } from 'react';

// \u8BF7\u6C42\u793A\u4F8B
const request = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

// \u4F7F\u7528\u65B9\u6CD5

const AsyncPool = () => {
  const [res1, setRes1] = React.useState<any>([]);
  const [res2, setRes2] = React.useState<any>([]);
  const [res3, setRes3] = React.useState<any>([]);
  const onClick = async () => {
    const res = await asyncPool(
      [
        () => request(2000).then((data) => setRes1(data)),
        () => request(5000).then((data) => setRes2(data)),
        () => request(4000).then((data) => setRes3(data)),
      ],
      2,
    );
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button type="button" onClick={onClick}>
        \u5F00\u59CB\u8BF7\u6C42
      </button>
      <div>res1: {res1}</div>
      <div>res2: {res2}</div>
      <div>res3: {res3}</div>
    </div>
  );
};

export default AsyncPool;
`},55261:function(s,e){e.Z=`import React, { useEffect } from 'react';
import tool1 from '../index';

const Tool1base = () => {
  useEffect(() => {
    tool1();
  }, []);

  return <div>tool1base</div>;
};

export default Tool1base;
`},69468:function(s,e){e.Z=`const tool1 = () => {
  console.log('this is tool1');
};

export default tool1;
`}}]);
