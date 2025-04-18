import cls from 'classnames';
import { FileInfo, getFileInfo } from 'gyc-components';
import React from 'react';
import { usePrefixCls } from '../../context';
import FileItem, { FileItemProps } from './FileItem';
export * from './type';

export interface FileListProps {
  fileList?: FileInfo[];
  className?: string;
  fileItemProps?:
    | Omit<FileItemProps, 'fileInfo'>
    | ((item: FileInfo) => Omit<FileItemProps, 'fileInfo'>);
}

const FileList: React.FC<FileListProps> & {
  FileItem: typeof FileItem;
} = ({ fileList, className, fileItemProps = {} }) => {
  const prefix = usePrefixCls('file-list');

  if (!fileList) {
    return null;
  }

  return (
    <div className={cls(prefix, className)}>
      {fileList.map((item) => (
        <FileItem
          key={getFileInfo(item).fileUuid}
          fileInfo={item}
          {...(typeof fileItemProps === 'function'
            ? fileItemProps(item)
            : fileItemProps)}
        />
      ))}
    </div>
  );
};

FileList.FileItem = FileItem;

export default FileList;
