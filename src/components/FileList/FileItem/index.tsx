import { convertFileSize, FileInfo, getFileInfo, Unit } from 'gyc-components';
import React from 'react';
import { FileActionsType } from '../type';
import FileActions from './FileActions';
import FileIcon from './FileIcon';

export interface FileItemOptions {
  /** 文件大小单位 B K M G 默认 B */
  fileSize?: {
    unit?: Unit;
    /** 文件大小最终单位 B K M G 默认 K */
    finalUnit?: Unit;
  };
}

export interface FileItemProps {
  fileInfo: FileInfo;
  /** 文件名点击事件 */
  fileNameOnClick?: (item: FileInfo) => void;
  /** 文件操作按钮 */
  actions?: FileActionsType;
  /** 文件展示配置 */
  options?: FileItemOptions;
}

const FileItem: React.FC<FileItemProps> = ({
  fileInfo,
  options = {},
  fileNameOnClick,
  actions = [],
}) => {
  const { fileSize: fileSizeOptions } = options || {};

  const { unit = 'B', finalUnit = 'k' } = fileSizeOptions || {};

  const resFileInfo = getFileInfo(fileInfo);

  const { fileName = '', fileSize } = resFileInfo;

  const showFileSize = fileSize !== 0 && !!fileSize;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 8,
      }}
    >
      <FileIcon fileName={fileName} />
      <a
        style={{
          flex: 1,
        }}
        onClick={() => fileNameOnClick?.(fileInfo)}
      >
        {fileName}
      </a>
      {showFileSize && (
        <div>{`${convertFileSize(fileSize, unit, finalUnit)}${finalUnit}`}</div>
      )}
      <FileActions fileInfo={fileInfo} actions={actions} />
    </div>
  );
};

export default FileItem;
