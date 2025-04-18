import {
  DeleteOutlined,
  EyeOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import { Space, message } from 'antd';
import {
  ActionType,
  FileActionsType,
  FileInfo,
  downloadFile,
  getFileInfo,
} from 'gyc-components';
import React from 'react';

const actionTypeMap: Record<ActionType, any> = {
  preview: {
    render: () => <EyeOutlined />,
  },
  download: {
    render: () => <VerticalAlignBottomOutlined />,
    onClick: (fileInfo: FileInfo) => {
      const resFileInfo = getFileInfo(fileInfo);
      if (!resFileInfo.fileUrl) {
        message.warning('文件不存在');
        return;
      }
      downloadFile(resFileInfo.fileUrl, resFileInfo.fileName);
      message.success('下载成功');
    },
  },
  delete: {
    render: () => <DeleteOutlined />,
  },
};

const getActionsList = (actions: FileActionsProps['actions']) => {
  return actions.map((item, index) => {
    if (typeof item === 'string') {
      return {
        type: item,
        ...actionTypeMap[item],
        key: item,
      };
    }
    return {
      ...(actionTypeMap[item?.type as ActionType] || {}),
      ...item,
      key: item?.type || index,
    };
  });
};

export interface FileActionsProps {
  fileInfo: FileInfo;
  actions: FileActionsType;
}

const FileActions: React.FC<FileActionsProps> = ({ actions, fileInfo }) => {
  const actionsList = getActionsList(actions);

  return (
    <Space>
      {actionsList.map((item) => {
        const { render, onClick, style = {}, key, visible } = item;
        if (visible && !visible(fileInfo)) {
          return null;
        }
        return (
          <a
            key={key}
            style={{
              ...style,
            }}
            onClick={() => onClick?.(fileInfo)}
          >
            {render?.(fileInfo)}
          </a>
        );
      })}
    </Space>
  );
};

export default FileActions;
