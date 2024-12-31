import { Modal, ModalProps } from 'antd';
import { useModal } from 'gyc-components';
import React, { useState } from 'react';

interface Props extends ModalProps {
  onSuccess: any;
  count: number;
}
const DemoModal: React.FC<Props> = ({ onSuccess, ...props }) => {
  console.log('DemoModal render', props);
  return (
    <Modal {...props} onOk={onSuccess}>
      <div>
        <div>我是初始弹窗</div>
        <div>{JSON.stringify(props)}</div>
      </div>
    </Modal>
  );
};

const UseModalBase = () => {
  const [count, setCount] = useState(0);

  const baseModal = useModal(DemoModal, {
    title: '弹窗属性',
    count,
    onSuccess: () => {
      console.log('onSuccess', count);
    },
  });

  return (
    <div>
      <a
        onClick={() => {
          baseModal.open({
            title: '我是修改后的弹窗',
          });
        }}
      >
        打开弹窗
      </a>
      <div
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        count: {count}
      </div>
      {baseModal.modalDom}
    </div>
  );
};

export default UseModalBase;
