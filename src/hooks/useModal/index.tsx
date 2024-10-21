import { Modal, ModalProps } from 'antd';
import React, { useRef, useState } from 'react';

type Content =
  | ((modalOptions: ModalProps) => React.ReactNode)
  | React.ReactNode;

type UseModalProps = ModalProps & {
  onOk?: (values: any) => void;
  content?: Content;
};

type Open = (
  params?: Omit<ModalProps, 'open'> & {
    content?: Content;
  },
) => void;
interface UseModalReturn {
  open: Open;
  close: () => void;
  modalDom: React.ReactNode;
  modalOptions: ModalProps;
}

export type UseModal = (props?: UseModalProps) => UseModalReturn;

// 转换 content 放到 state 中
const transformContent = (content: Content, params: any): React.ReactNode => {
  if (typeof content === 'function') {
    return content(params);
  }
  return content;
};

const useModal: UseModal = ({ content, ...rest } = {}) => {
  const [modalOptions, setModalOptions] = useState<ModalProps>({
    open: false,
    ...rest,
  });

  const resContent = transformContent(content, modalOptions);
  const initialContentRef = useRef(resContent);

  const [modalContent, setModalContent] = useState<React.ReactNode>(resContent);

  const open: Open = (openProps = {}) => {
    const { content, ...options } = openProps;

    const resModalOptions = {
      ...modalOptions,
      ...options,
      open: true,
    };

    setModalOptions(resModalOptions);

    // 处理 content 没传就使用默认值
    const resContent = transformContent(
      content || initialContentRef.current,
      resModalOptions,
    );

    setModalContent(resContent);
  };

  const close = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  const modalDom = (
    <Modal
      onCancel={() => {
        close();
      }}
      {...modalOptions}
    >
      {modalContent}
    </Modal>
  );

  return { open, close, modalDom, modalOptions };
};

export default useModal;
