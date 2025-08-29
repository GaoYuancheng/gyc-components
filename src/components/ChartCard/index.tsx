import { EChartsOption } from 'echarts';
import React from 'react';
import BaseECharts from '../BaseECharts';
import FormCard, { FormCardProps } from '../FormCard';

interface ChartCardProps
  extends Omit<FormCardProps, 'childrenRender' | 'request'> {
  request: (
    ...args: Parameters<FormCardProps['request']>
  ) => Promise<EChartsOption>;
}

const ChartCard: React.FC<ChartCardProps> = ({ ...rest }) => {
  const childrenRender = (data: any) => {
    return (
      <BaseECharts
        style={{
          height: 200,
        }}
        options={data}
      />
    );
  };

  return <FormCard {...rest} childrenRender={childrenRender} />;
};

export default ChartCard;
