import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadProps } from 'antd';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface FileItem {
  name: string;
  url: string;
  response: {
    fileUuid: string;
  };
}

export interface GUploadProps extends UploadProps {
  value?: FileItem[];
  readonly?: boolean;
}

const GUpload: React.FC<PropsWithChildren<GUploadProps>> = ({
  value,
  onChange,
  readonly,
  ...rest
}) => {
  const [fileList, setFileList] = useState<FileItem[]>([]);

  const handleOnChange = (info: any) => {
    console.log('info', info);
    setFileList(info.fileList);
    onChange?.(info.fileList);
  };

  useEffect(() => {
    if (value) {
      setFileList(value);
    }
  }, [value]);

  return (
    <Upload
      maxCount={1}
      showUploadList={true}
      customRequest={(parameters) => {
        console.log(parameters);
      }}
      disabled={readonly}
      listType={readonly ? 'text' : 'picture-card'}
      itemRender={(originNode, file, fileList, actions) => {
        if (!readonly) {
          return originNode;
        }
        const { download, preview, remove } = actions;
        return (
          <div style={{ lineHeight: '30px' }}>
            <a href={file?.url} download>
              {file.name}
            </a>
          </div>
        );
      }}
      accept="image/jpg,image/jpeg,image/png,*.svg"
      fileList={fileList as any}
      onChange={handleOnChange}
      {...rest}
    >
      {readonly ? null : '点击上传'}
    </Upload>
  );
};

export default GUpload;
