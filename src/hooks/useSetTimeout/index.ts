// 使用 setTimeout 实现 setInterval 效果，支持 Promise，并且首次立即执行

import { useEffect, useRef } from 'react';

export const useSetTimeout = (
  fn: () => Promise<any> | void,
  {
    delay = 1000,
    immediate = false,
  }: {
    delay?: number;
    immediate?: boolean;
  } = {},
) => {
  const savedCallback = useRef<() => Promise<void> | void>();

  // 保存新的回调函数
  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  // 设置定时器
  useEffect(() => {
    let timer: NodeJS.Timeout;

    async function tick() {
      if (savedCallback.current) {
        try {
          await savedCallback.current();
        } catch (error) {
          console.error('Error in setTimeout callback:', error);
        }
      }
      timer = setTimeout(tick, delay);
    }

    if (delay !== null) {
      timer = immediate ? setTimeout(tick, 0) : setTimeout(tick, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);
};
