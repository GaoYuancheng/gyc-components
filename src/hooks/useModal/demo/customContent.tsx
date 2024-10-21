import { useModal } from 'gyc-components';
import React from 'react';

const UseModalCustomContent = () => {
  const { open, modalDom } = useModal({
    destroyOnClose: true,
    title: '弹窗属性',
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
      <div>
        <a
          onClick={() => {
            open();
          }}
        >
          初始Content
        </a>
      </div>

      <div>
        <a
          onClick={() => {
            open({
              title: '弹窗属性',
              content: (modalProps) => {
                return <div>{JSON.stringify(modalProps)}</div>;
              },
            });
          }}
        >
          使用自定义 content
        </a>
      </div>

      {modalDom}
    </div>
  );
};

export default UseModalCustomContent;
