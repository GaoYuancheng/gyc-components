import { Modal, ModalProps } from 'antd';
import React, { useEffect } from 'react';

interface DetailModalProps extends ModalProps {
  data: any;
}

const DetailModal: React.FC<DetailModalProps> = ({ data, ...rest }) => {
  const { open } = rest;
  const { id } = data;

  const init = async () => {
    console.log('init');
  };

  useEffect(() => {
    if (open) {
      init();
    }
  }, [open, id]);

  return (
    <Modal {...rest}>
      <div>DetailModal: {id}</div>
    </Modal>
  );
};

export default DetailModal;
