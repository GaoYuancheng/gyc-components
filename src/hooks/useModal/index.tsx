import { Form, Modal, ModalProps } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

export interface ContentRenderProps {
  data: any;
  modalProps: ModalProps;
}

interface UseModalProps extends ModalProps {
  contentRender: (params: ContentRenderProps) => React.ReactNode;
}

type OmitModalPropsOpen = Omit<ModalProps, 'open'>;

interface OpenProps extends OmitModalPropsOpen {
  data?: any;
}

interface UseModalReturn {
  open: (params: OpenProps) => void;
  close: () => void;
  modalDom: React.ReactNode;
}

export type UseModal = (props: UseModalProps) => UseModalReturn;

const useModal: UseModal = ({ contentRender, ...rest }) => {
  const [openState, setOpenState] = useState(false);
  const [data, setData] = useState(false);
  const [modalPropsState, setModalPropsState] = useState<OmitModalPropsOpen>(
    {},
  );

  const open = ({ data, ...rest }: OpenProps) => {
    setOpenState(true);
    setData(data);
    setModalPropsState(rest);
  };

  const close = () => {
    setOpenState(false);
  };
  const contentParams = {
    data,
    modalProps: {
      ...rest,
      open: openState,
    },
  };

  const modalDom = (
    <Modal
      onCancel={() => {
        close();
      }}
      open={openState}
      destroyOnClose
      {...rest}
      {...modalPropsState}
    >
      {contentRender(contentParams)}
    </Modal>
  );

  return { open, close, modalDom };
};

export default useModal;
