import { EChartsOption } from 'echarts';
import { BaseECharts } from 'gyc-components';
import React, { useMemo } from 'react';

export default () => {
  // 图表配置
  const options: EChartsOption = useMemo(() => {
    return {
      title: {
        text: '基础柱状图示例',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category' as const,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '访问量',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };
  }, []);

  return (
    <BaseECharts
      options={options}
      style={{ height: 400 }}
      onChartReady={(instance) => {
        console.log('图表已准备就绪', instance);
      }}
    />
  );
};
