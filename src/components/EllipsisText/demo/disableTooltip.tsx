import { EllipsisText } from 'gyc-components';
import React from 'react';

const DisableTooltipDemo = () => {
  return (
    <EllipsisText width={200} showTooltip={false}>
      这是一段很长的文本，当文本超出容器宽度时会显示省略号，但不会显示 tooltip
    </EllipsisText>
  );
};

export default DisableTooltipDemo;
