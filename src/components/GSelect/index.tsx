import { Select } from 'antd';
import React from 'react';

const GSelect = () => {
  return (
    <Select>
      <Select.Option value={1}>1</Select.Option>
      <Select.Option value={12}>12</Select.Option>
      <Select.Option value={123}>123</Select.Option>
    </Select>
  );
};

export default GSelect;
