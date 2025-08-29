import { DatePicker } from 'antd';
import { ChartCard, getCommonPieOptions } from 'gyc-components';
import moment from 'moment';
import React from 'react';

export default () => {
  // 模拟饼图数据
  const mockPieData = [
    { name: '产品A', value: 335, percent: 44.34 },
    { name: '产品B', value: 310, percent: 41.06 },
    { name: '产品C', value: 110, percent: 14.6 },
  ];

  // 模拟请求函数
  const fetchPieData = async (params: any) => {
    console.log('请求参数:', params);

    // 实际应用中，可以根据日期参数从服务器获取数据
    return getCommonPieOptions(mockPieData);
  };

  return (
    <ChartCard
      title="产品销售占比"
      request={fetchPieData}
      formItems={[
        {
          label: '日期',
          name: 'date',
          children: (
            <DatePicker defaultValue={moment()} style={{ width: 120 }} />
          ),
        },
      ]}
    />
  );
};
