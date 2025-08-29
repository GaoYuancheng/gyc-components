import { Select } from 'antd';
import { ChartCard, commonOptions, commonSeries } from 'gyc-components';
import React from 'react';

export default () => {
  // 模拟数据
  const mockData = {
    xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    seriesData: [120, 200, 150, 80, 70, 110],
  };

  // 模拟请求函数
  const fetchChartData = async (params: any) => {
    console.log('请求参数:', params);

    // 根据选择的图表类型返回不同配置
    const { chartType = 'bar' } = params;

    return {
      ...commonOptions,
      title: {
        text: '销售数据',
      },
      xAxis: {
        ...commonOptions.xAxis,
        data: mockData.xAxisData,
      },
      series: [
        {
          ...commonSeries[chartType as 'bar' | 'line'],
          data: mockData.seriesData,
          name: '销售额',
        },
      ],
    };
  };

  return (
    <ChartCard
      title="销售趋势"
      request={fetchChartData}
      formItems={[
        {
          label: '图表类型',
          name: 'chartType',
          children: (
            <Select
              style={{ width: 120 }}
              defaultValue="bar"
              options={[
                { label: '柱状图', value: 'bar' },
                { label: '折线图', value: 'line' },
              ]}
            />
          ),
        },
      ]}
    />
  );
};
