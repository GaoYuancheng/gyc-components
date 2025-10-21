import { EllipsisText } from 'gyc-components';
import React from 'react';

const BaseDemo = () => {
  return (
    <EllipsisText width={200}>
      这是一段很长的文本，当文本超出容器宽度时会显示省略号，鼠标悬停时会显示完整内容
    </EllipsisText>
  );
};

export default BaseDemo;
