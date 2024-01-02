import classnames from 'classnames';
import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactDom from 'react-dom';
import './index.less';

export interface CustomBimGisModalProps {
  onClose?: React.MouseEventHandler<HTMLImageElement>;
  open?: boolean;
  title?: string;
  header?: boolean;
  style?: CSSProperties;
  className?: string;
  targetNode?: (node: HTMLElement) => Element;
  afterClose?: () => void;
  destroyOnClose?: boolean;
}

const GModal: React.FC<PropsWithChildren<CustomBimGisModalProps>> = ({
  onClose,
  className,
  title,
  header = true,
  open = true,
  style,
  targetNode,
  children,
  afterClose,
  destroyOnClose = true,
  ...rest
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [contentStyle, setContentStyle] = useState<CSSProperties>({});

  const height = style?.height || 400;
  const width = style?.width || 520;

  const modalDom: any = (
    <div
      className={classnames('gModal', className)}
      style={{
        width,
        height,
        ...style,
        ...contentStyle,
        display: open ? 'block' : 'none',
      }}
      {...rest}
    >
      <div className="gModalContent" style={{}}>
        {header && (
          <div className="header">
            <div className="title">{title}</div>
            <div className="closeIcon">
              <div className="closeImg" onClick={onClose}>
                x
              </div>
            </div>
          </div>
        )}

        <div className="content">{children}</div>
      </div>
    </div>
  );

  useEffect(() => {
    if (open) {
      setContentStyle({
        top: (window.innerHeight - (height as number)) / 2,
        left: (window.innerWidth - (width as number)) / 2,
      });
      setIsOpened(true);
    } else {
      afterClose?.();
      // setContentStyle({
      //   top: 0,
      //   left: (window.innerWidth - width) / 20,
      // });
    }
  }, [open]);

  if (!isOpened) {
    return null;
  }

  if (destroyOnClose) {
    if (open) {
      return (
        <div ref={domRef}>
          {ReactDom.createPortal(
            modalDom,
            targetNode
              ? targetNode(domRef.current as HTMLElement)
              : document.body,
          )}
        </div>
      );
    }
    return null;
  }

  return (
    <div ref={domRef}>
      {ReactDom.createPortal(
        modalDom,
        targetNode ? targetNode(domRef.current as HTMLElement) : document.body,
      )}
    </div>
  );
};

export default GModal;
