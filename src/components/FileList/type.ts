import { FileInfo } from 'gyc-components';

/** 操作类型 目前支持 preview download delete */
export type ActionType = 'preview' | 'download' | 'delete';

/** 文件操作按钮 */
export type FileActionsType = (
  | {
      /** 操作类型 */
      type?: ActionType;
      /** 操作点击事件 */
      onClick?: (fileInfo: FileInfo) => void;
      /** 自定义渲染 */
      render?: (fileInfo: FileInfo) => React.ReactNode;
      /** 自定义样式 */
      style?: React.CSSProperties;
      /** 是否显示 */
      visible?: (fileInfo: FileInfo) => boolean;
    }
  | ActionType
)[];
