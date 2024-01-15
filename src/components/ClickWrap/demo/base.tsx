import { ClickWrap } from 'gyc-components';
import React from 'react';

const ClickWrapBase = () => {
  return (
    <ClickWrap
      onClick={() => {
        console.log('clickWrap');
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          background: 'pink',
        }}
      ></div>
    </ClickWrap>
  );
};

export default ClickWrapBase;
