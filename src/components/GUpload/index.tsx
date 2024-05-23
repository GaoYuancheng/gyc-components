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
}

const GUpload: React.FC<PropsWithChildren<GUploadProps>> = ({
  value,
  onChange,
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
      accept="image/jpg,image/jpeg,image/png,*.svg"
      fileList={fileList as any}
      onChange={handleOnChange}
      {...rest}
    >
      <div>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </div>
    </Upload>
  );
};

export default GUpload;
