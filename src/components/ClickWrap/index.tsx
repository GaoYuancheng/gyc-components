import React, { PropsWithChildren, useEffect, useRef } from 'react';

interface Props {
  onClick?: (e: MouseEvent) => void;
}

const ClickWrap: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  const isMouseInDom = useRef(false);

  // 通过ReactClone直接在children上绑定 onMouseLeave 和 onMouseEnter 可以减少一层div
  const resDom = React.cloneElement(children as React.ReactElement, {
    onMouseLeave: () => {
      isMouseInDom.current = false;
    },
    onMouseEnter: () => {
      isMouseInDom.current = true;
    },
  });

  useEffect(() => {
    const wrapDom = document.body;
    const onWrapDomOnClick = (e: MouseEvent) => {
      if (!isMouseInDom.current) {
        // 不在当前dom区域
        onClick?.(e);
      }
    };

    wrapDom.addEventListener('click', onWrapDomOnClick);
    return () => {
      wrapDom.removeEventListener('click', onWrapDomOnClick);
    };
  }, []);

  return resDom;
};

export default ClickWrap;
