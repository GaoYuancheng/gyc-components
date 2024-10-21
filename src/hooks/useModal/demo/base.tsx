import { useModal } from 'gyc-components';
import React from 'react';

const UseModalBase = () => {
  const { open, modalDom } = useModal({
    destroyOnClose: true,
    content: (modalProps) => {
      return (
        <div>
          <div>我是初始弹窗</div>
          <div>{JSON.stringify(modalProps)}</div>
        </div>
      );
    },
  });

  return (
    <div>
      <a
        onClick={() => {
          open({
            title: '弹窗属性',
          });
        }}
      >
        打开弹窗
      </a>
      {modalDom}
    </div>
  );
};

export default UseModalBase;
