import { Button, Card, message } from 'antd';
import { EChartsOption } from 'echarts';
import { BaseECharts } from 'gyc-components';
import React, { useMemo, useState } from 'react';

export default () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // 图表配置
  const options: EChartsOption = useMemo(() => {
    return {
      title: {
        text: '事件处理示例',
        subtext: '点击饼图扇区查看事件效果',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'auto',
        bottom: 'auto',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' },
          ],
        },
      ],
    };
  }, []);

  // 事件处理函数
  const handleEvents = {
    click: (params: any) => {
      message.info(`点击了 ${params.name}，数值为 ${params.value}`);
      setSelectedItem(params.name);
    },
  };

  // 清除选中
  const handleClearSelection = () => {
    setSelectedItem(null);
    message.success('已清除选中状态');
  };

  return (
    <>
      <BaseECharts
        options={options}
        style={{ height: 400 }}
        onEvents={handleEvents}
      />
      <Card style={{ marginTop: 16 }}>
        <p>
          当前选中：
          {selectedItem ? (
            <strong style={{ color: '#1890ff' }}>{selectedItem}</strong>
          ) : (
            '无'
          )}
        </p>
        <Button
          type="primary"
          onClick={handleClearSelection}
          disabled={!selectedItem}
        >
          清除选中
        </Button>
      </Card>
    </>
  );
};
