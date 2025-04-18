import cls from 'classnames';
import {
  audioExtensions,
  excelExtensions,
  getFileExtension,
  imageExtensions,
  pdfExtensions,
  pptExtensions,
  videoExtensions,
  wordExtensions,
  zipExtensions,
} from 'gyc-components';
import { usePrefixCls } from 'gyc-components/context';
import React from 'react';
import './index.less';

const getFileIconConfig = (fileName: string) => {
  const ext = getFileExtension(fileName);
  if (imageExtensions.includes(ext)) {
    return {
      style: {
        background: '#44C0FF',
      },
    };
  }
  if (videoExtensions.includes(ext)) {
    return {
      style: {
        background: '#8E92F4',
      },
    };
  }
  if (audioExtensions.includes(ext)) {
    return {
      style: {
        background: '#8E92F4',
      },
    };
  }
  if (zipExtensions.includes(ext)) {
    return {
      style: {
        background: '#FFCD00',
      },
    };
  }
  if (wordExtensions.includes(ext)) {
    return {
      style: {
        background: '#46A6FF',
      },
    };
  }
  if (excelExtensions.includes(ext)) {
    return {
      style: {
        background: '#49C292',
      },
    };
  }
  if (pptExtensions.includes(ext)) {
    return {
      style: {
        background: '#FF804C',
      },
    };
  }
  if (pdfExtensions.includes(ext)) {
    return {
      style: {
        background: '#FF6B6B',
      },
    };
  }

  return {
    style: {
      background: '#B9CAD5',
    },
    text: '?',
  };
};

interface Props {
  fileName: string;
  className?: string;
}

const FileIcon: React.FC<Props> = ({ fileName, className }) => {
  const ext = getFileExtension(fileName, {
    toLowerCase: true,
  });
  const { style, text } = getFileIconConfig(fileName);
  const prefix = usePrefixCls('file-icon');

  return (
    <div
      className={cls(prefix, className)}
      style={{
        color: '#fff',
        ...style,
      }}
    >
      {text || ext.slice(0, 4)}
    </div>
  );
};

export default FileIcon;
