---
group:
  title: tools
  order: 2
---

# downloadAndUploadToNexus

把 npm 包上传到 nexus npm 仓库

## 项目目录

```
📦nexus-npm
┣ 📂scripts
┃ ┗ 📜downloadAndUploadToNexus.sh
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md
```

### downloadAndUploadToNexus.sh

```sh
TGZ_NAME=tgz2
# 仓库地址
REPO_URL="http://xxx/service/rest/v1/components?repository=npm-hosted"
USERNAME=xx
PASSWORD=xxx
LOG_FILE="upload_to_nexus.log"

echo "正在删除 node_modules"
rm -rf node_modules
echo "正在删除 package-lock.json"
rm -rf package-lock.json
echo "正在删除 tarballs"
rm -rf tarballs
echo "正在删除 $TGZ_NAME"
rm -rf "$TGZ_NAME"

npm i

download-tgz package-lock package-lock.json

mkdir "$TGZ_NAME"
# 这句话的作用是：在 tarballs 目录下查找所有扩展名为 .tgz 的文件，并把它们复制到 ./tgz2 目录中（如果同名文件存在则覆盖）。

echo "正在复制到 $TGZ_NAME"
find ./tarballs -name '*.tgz' -exec cp -f {} "./$TGZ_NAME" \;

echo "复制完成 $TGZ_NAME"


# 上传到 Nexus
# find 并批量上传

count=0
total=$(find "./$TGZ_NAME" -type f -name '*.tgz' | wc -l)
find "./$TGZ_NAME" -type f -name '*.tgz' | sed "s|^\./||" | while read tgz_file; do
  # 并且记录上传序号
  count=$((count+1))
  echo "Uploading $tgz_file ($count/$total) ..."
  curl -u "$USERNAME:$PASSWORD" -X 'POST' -v \
    ${REPO_URL} \
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \
    -F "npm.asset=@${tgz_file};type=application/x-compressed"
  if [ $? -eq 0 ]; then
    echo "Upload of $tgz_file succeeded."
  else
    echo "Upload of $tgz_file FAILED!" | tee -a "$LOG_FILE"
  fi
done

```

#### 首次执行

1. npm i node-tgz-downloader -g 安装 node-tgz-downloader，用来下载依赖的 tgz 文件
2. npm install xxx 下载相关依赖
3. download-tgz package-lock package-lock.json
4. ./scripts/downloadAndUplodToNexus.sh

#### 后续执行

1. ./scripts/downloadAndUplodToNexus.sh
