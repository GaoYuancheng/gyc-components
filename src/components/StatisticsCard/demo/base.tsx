import { Select } from 'antd';
import { StatisticsCard, StatisticsCardItem } from 'gyc-components';
import { mockRequest } from 'gyc-components/utils/request';
import React from 'react';

export default () => {
  // 模拟图标路径
  const iconBase = 'iconBase/';
  const icons = {
    users: `${iconBase}users.png`,
    visits: `${iconBase}visits.png`,
    messages: `${iconBase}messages.png`,
    orders: `${iconBase}orders.png`,
    revenue: `${iconBase}revenue.png`,
  };

  // 模拟数据
  const mockData: Record<string, StatisticsCardItem[]> = {
    today: [
      { label: '总用户', icon: icons.users, value: 1234, unit: '人' },
      { label: '访问量', icon: icons.visits, value: 5678, unit: '次' },
      { label: '消息数', icon: icons.messages, value: 987, unit: '条' },
      { label: '订单数', icon: icons.orders, value: 456, unit: '笔' },
      { label: '收入', icon: icons.revenue, value: 12345, unit: '元' },
    ],
    yesterday: [
      { label: '总用户', icon: icons.users, value: 1200, unit: '人' },
      { label: '访问量', icon: icons.visits, value: 5200, unit: '次' },
      { label: '消息数', icon: icons.messages, value: 900, unit: '条' },
      { label: '订单数', icon: icons.orders, value: 420, unit: '笔' },
      { label: '收入', icon: icons.revenue, value: 11500, unit: '元' },
    ],
    lastWeek: [
      { label: '总用户', icon: icons.users, value: 1100, unit: '人' },
      { label: '访问量', icon: icons.visits, value: 4800, unit: '次' },
      { label: '消息数', icon: icons.messages, value: 850, unit: '条' },
      { label: '订单数', icon: icons.orders, value: 380, unit: '笔' },
      { label: '收入', icon: icons.revenue, value: 10200, unit: '元' },
    ],
  };

  // 模拟请求函数
  const fetchData = async (params: any) => {
    console.log('请求参数:', params);

    // 根据时间段返回不同数据
    const { timeRange = 'today' } = params;

    return mockRequest(params, mockData[timeRange]);
  };

  return (
    <StatisticsCard
      title="数据概览"
      request={fetchData}
      formItems={[
        {
          label: '时间段',
          name: 'timeRange',
          formItemProps: {
            initialValue: 'today',
          },
          children: (
            <Select
              style={{ width: 120 }}
              options={[
                { label: '今日', value: 'today' },
                { label: '昨日', value: 'yesterday' },
                { label: '上周', value: 'lastWeek' },
              ]}
            />
          ),
        },
      ]}
      detailHref="/dashboard/detail"
    />
  );
};
