import { FileList } from 'gyc-components';
import React from 'react';

const fileListMock = [
  {
    fileUuid: 'b2840125-9edb-8a94-01fe-080a48ca9fb4',
    fileUrl: 'b2840125-9edb-8a94-01fe-080a48ca9fb4',
    fileName:
      '测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx测试.docx',
    fileSize: 1024,
  },
  {
    fileUuid: 'b2540114-469e-8a94-5f51-04c1022b6b8d',
    fileUrl:
      'https://minio937180318.tepc.cn/tjdj-file-prod/b2540112-50ab-8a94-5f51-04b97a8c5c93.docx?response-content-disposition=attachment%3BtemplateFileName%3D%22%E6%B5%8B%E8%AF%95%E7%AD%BE%E5%90%8D.docx%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BamicFrfVcb0P2JWSaa18k%2F20250214%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250214T022552Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0a6aea0fa87ca4baba29262536b2bbde2725863e65e22f61f3ebeb948ba52dba',
    fileName: '测试签名.docx',
    fileSize: 1024,
  },
  {
    fileUuid: '3',
    fileName: 'fileName3',
    fileUrl: 'b2840125-9edb-8a94-01fe-080a48ca9fb1',
    fileSize: 1024000000000,
  },
];

const FileListBase = () => {
  return (
    <FileList
      fileList={fileListMock}
      fileItemProps={{
        fileNameOnClick: (item) => {
          console.log('fileNameOnClick', item);
        },
        options: {
          fileSize: {
            unit: 'B',
            finalUnit: 'G',
          },
        },
      }}
    />
  );
};

export default FileListBase;
