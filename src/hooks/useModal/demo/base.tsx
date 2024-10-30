import { Modal, ModalProps } from 'antd';
import { useModal } from 'gyc-components';
import React from 'react';

interface Props extends ModalProps {}
const DemoModal: React.FC<Props> = ({ ...props }) => {
  return (
    <Modal {...props}>
      <div>
        <div>我是初始弹窗</div>
        <div>{JSON.stringify(props)}</div>
      </div>
    </Modal>
  );
};

const UseModalBase = () => {
  const baseModal = useModal(DemoModal, {
    title: '弹窗属性',
  });

  return (
    <div>
      <a
        onClick={() => {
          baseModal.open();
        }}
      >
        打开弹窗
      </a>
      {baseModal.modalDom}
    </div>
  );
};

export default UseModalBase;
