import { Select } from 'antd';
import React from 'react';
import './index.less';

const GSelect: React.FC<any> = () => {
  return (
    <Select className="gselect">
      <Select.Option value={1}>1</Select.Option>
      <Select.Option value={12}>12</Select.Option>
      <Select.Option value={123}>123</Select.Option>
    </Select>
    // <div className="gselect">GSelect</div>
  );
};

const GSelectFunc = () => {
  console.log('GSelectFunc');
};

export default GSelect;
