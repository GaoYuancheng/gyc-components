import { Select, Table, Tag } from 'antd';
import { FormCard } from 'gyc-components';
import React from 'react';

export default () => {
  // 模拟数据
  const mockData = [
    {
      id: 1,
      name: '张三',
      department: '研发部',
      level: 'P5',
      performance: 'A',
    },
    {
      id: 2,
      name: '李四',
      department: '设计部',
      level: 'P4',
      performance: 'B',
    },
    {
      id: 3,
      name: '王五',
      department: '产品部',
      level: 'P6',
      performance: 'A',
    },
    {
      id: 4,
      name: '赵六',
      department: '研发部',
      level: 'P5',
      performance: 'C',
    },
    {
      id: 5,
      name: '钱七',
      department: '设计部',
      level: 'P3',
      performance: 'A',
    },
  ];

  // 表格列定义
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '级别',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: '绩效',
      dataIndex: 'performance',
      key: 'performance',
      render: (performance: string) => {
        let color = 'green';
        if (performance === 'B') {
          color = 'blue';
        } else if (performance === 'C') {
          color = 'orange';
        }
        return <Tag color={color}>{performance}</Tag>;
      },
    },
  ];

  // 模拟请求函数
  const fetchData = async (params: any) => {
    console.log('请求参数:', params);

    // 根据部门筛选数据
    let filteredData = [...mockData];
    if (params.department) {
      filteredData = filteredData.filter(
        (item) => item.department === params.department,
      );
    }

    // 根据绩效筛选数据
    if (params.performance) {
      filteredData = filteredData.filter(
        (item) => item.performance === params.performance,
      );
    }

    // 模拟异步请求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredData);
      }, 500);
    });
  };

  return (
    <FormCard
      title="员工信息"
      request={fetchData}
      formItems={[
        {
          label: '部门',
          name: 'department',
          children: (
            <Select
              style={{ width: 120 }}
              allowClear
              placeholder="请选择"
              options={[
                { label: '研发部', value: '研发部' },
                { label: '设计部', value: '设计部' },
                { label: '产品部', value: '产品部' },
              ]}
            />
          ),
        },
        {
          label: '绩效',
          name: 'performance',
          children: (
            <Select
              style={{ width: 120 }}
              allowClear
              placeholder="请选择"
              options={[
                { label: 'A', value: 'A' },
                { label: 'B', value: 'B' },
                { label: 'C', value: 'C' },
              ]}
            />
          ),
        },
      ]}
      childrenRender={(data = []) => (
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={false}
          size="small"
        />
      )}
    />
  );
};
