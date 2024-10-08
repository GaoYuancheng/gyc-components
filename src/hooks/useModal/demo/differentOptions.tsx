import { useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

const useDetailModal = () => {
  const modal = useModal({
    contentRender: ({ data, modalProps }) => <div>content</div>,
    title: 'DetailContent',
  });

  return modal;
};

const UseModalDifferentOptions = () => {
  const { open, modalDom } = useDetailModal();

  return (
    <div>
      <a
        onClick={() => {
          open({
            data: {
              id: '1',
              content: 'content',
            },
            title: '新增',
          });
        }}
      >
        新增
      </a>

      <a
        onClick={() => {
          open({
            data: {
              id: '1',
              content: 'content',
            },
            title: '详情',
            footer: null,
          });
        }}
      >
        详情
      </a>

      {modalDom}
    </div>
  );
};

export default UseModalDifferentOptions;
