import { FileList } from 'gyc-components';
import React from 'react';

const fileListMock = [
  {
    fileUuid: 'b2840125-9edb-8a94-01fe-080a48ca9fb4',
    fileUrl: '',
    fileName:
      '测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx',
    fileSize: 10241,
  },
  {
    fileUuid: 'b2540114-469e-8a94-5f51-04c1022b6b8d',
    fileUrl:
      'https://minio937180318.tepc.cn/tjdj-file-prod/b2540112-50ab-8a94-5f51-04b97a8c5c93.docx?response-content-disposition=attachment%3BtemplateFileName%3D%22%E6%B5%8B%E8%AF%95%E7%AD%BE%E5%90%8D.docx%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BamicFrfVcb0P2JWSaa18k%2F20250214%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250214T022552Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0a6aea0fa87ca4baba29262536b2bbde2725863e65e22f61f3ebeb948ba52dba',
    fileName: '测试签名.mp4',
    fileSize: 1024,
  },
  {
    fileUuid: '3',
    fileName: 'fileName3',
    fileUrl: '',
    fileSize: 102,
  },
];

const FileListBase = () => {
  return (
    <FileList
      fileList={fileListMock}
      fileItemProps={{
        options: {
          fileSize: {
            unit: 'B',
            finalUnit: 'M',
          },
        },
        fileNameOnClick: (item) => {
          console.log('fileNameOnClick', item);
        },
        actions: [
          'download',
          {
            type: 'preview',
            onClick: (fileInfo) => {
              console.log('preview');
            },
            visible: (fileInfo) => {
              console.log(' FileListBase ~ fileInfo:', fileInfo);
              // 文件大小大于1024或者有文件url
              return (
                !!(fileInfo?.fileSize && fileInfo?.fileSize > 1024) ||
                !!fileInfo?.fileUrl
              );
            },
          },
          {
            type: 'delete',
            onClick: () => {
              console.log('delete');
            },
          },
          {
            render: (fileInfo) => {
              return <div>自定义</div>;
            },
          },
        ],
      }}
    />
  );
};

export default FileListBase;
