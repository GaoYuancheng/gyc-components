import { EllipsisText } from 'gyc-components';
import React from 'react';

const MultiLineDemo = () => {
  return (
    <EllipsisText width={200} maxLines={3}>
      这是一段很长的文本，支持多行显示。当文本超过指定的行数时会显示省略号，鼠标悬停时会显示完整内容。这个组件非常适用于显示长文本内容。
    </EllipsisText>
  );
};

export default MultiLineDemo;
