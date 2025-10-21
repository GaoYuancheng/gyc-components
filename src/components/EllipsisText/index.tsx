import { Tooltip, TooltipProps } from 'antd';
import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState,
  type FC,
} from 'react';

export interface EllipsisTextProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  /** 最大行数，默认为1 */
  maxLines?: number;
  /** 是否显示tooltip，默认为true */
  showTooltip?: boolean;
  /** tooltip的标题 */
  tooltipTitle?: React.ReactNode;
  /** tooltip的配置 */
  tooltipProps?: TooltipProps;
  /** 文本样式 */
  width?: CSSProperties['width'];
}

const EllipsisText: FC<EllipsisTextProps> = ({
  children,
  maxLines = 1,
  showTooltip = true,
  tooltipTitle,
  tooltipProps,
  width,
  ...rest
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const element = textRef.current;
        const isOverflow =
          element.scrollHeight > element.clientHeight ||
          element.scrollWidth > element.clientWidth;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();

    // 监听窗口大小变化
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [children, maxLines]);

  const textElement = (
    <div
      ref={textRef}
      {...rest}
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        wordBreak: 'break-word',
        width,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );

  if (showTooltip && isOverflowing) {
    return (
      <Tooltip
        title={tooltipTitle || children}
        placement="top"
        {...tooltipProps}
      >
        {textElement}
      </Tooltip>
    );
  }

  return textElement;
};

export default EllipsisText;
