import { EllipsisText } from 'gyc-components';
import React from 'react';

const CustomTooltipDemo = () => {
  return (
    <EllipsisText
      width={200}
      tooltipTitle="自定义的提示内容"
      tooltipProps={{ placement: 'bottom' }}
    >
      这是一段很长的文本，当文本超出容器宽度时会显示省略号
    </EllipsisText>
  );
};

export default CustomTooltipDemo;
