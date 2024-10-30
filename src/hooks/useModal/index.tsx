import { Modal, ModalProps } from 'antd';
import React, { useRef, useState } from 'react';

const useModal = <P extends React.ElementType>(
  ModalComponent: P,
  modalProps: Partial<ModalProps & React.ComponentProps<P>> = {},
) => {
  type ModalOptions = Partial<ModalProps & React.ComponentProps<P>>;

  type UseModalReturn = {
    open: (params?: ModalOptions) => void;
    close: () => void;
    modalDom: React.ReactNode;
    modalOptions: ModalOptions;
  };

  // 默认配置
  const defaultModalOptions: ModalProps = {
    open: false,
    visible: false,
    onCancel: () => {
      close();
    },
    ...modalProps,
  };

  const [modalOptions, setModalOptions] =
    useState<ModalProps>(defaultModalOptions);

  const initialModalOptionsRef = useRef(defaultModalOptions);

  const close = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
      visible: false,
    });
  };
  const modalDom = React.createElement(ModalComponent, modalOptions);

  const open: UseModalReturn['open'] = (openParams = {}) => {
    setModalOptions({
      ...initialModalOptionsRef.current,
      ...openParams,
      open: true,
      visible: true,
    });
  };

  return {
    modalDom,
    open,
    close,
    modalOptions,
  } as UseModalReturn;
};

export default useModal;
