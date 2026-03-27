import { Button, Card, Space } from 'antd';
import { GSelect, mockRequest } from 'gyc-components';
import React, { useState } from 'react';

interface OptionItem {
  label: string;
  value: string;
}

/**
 * 获取分页数据
 */
const fetchSelectData = (params: { page: number; pageSize: number }) => {
  const data: any[] = [];
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: `${i}`,
      name: `选项 ${i}`,
    });
  }

  const pageNum = parseInt(params.page.toString(), 10);
  const sizeNum = parseInt(params.pageSize.toString(), 10);

  const startIndex = (pageNum - 1) * sizeNum;
  const endIndex = startIndex + sizeNum;
  const list = data.slice(startIndex, endIndex);

  return mockRequest(
    {},
    {
      list,
      total: data.length,
    },
  );
};

/**
 * MySelect 测试页面
 * @description 测试分页加载和回填第二页数据功能
 */
export default function MySelectTestPage() {
  const [singleValue, setSingleValue] = useState<OptionItem | undefined>({
    label: '选项 15',
    value: '15',
  });
  const [multiValue, setMultiValue] = useState<OptionItem[]>([
    { label: '选项 1', value: '1' },
    { label: '选项 15', value: '15' },
    { label: '选项 25', value: '25' },
    { label: '选项 35', value: '35' },
  ]);

  const handleResetToPage2 = () => {
    setSingleValue({ label: '选项 15', value: '15' });
  };

  const handleResetToPage1 = () => {
    setSingleValue({ label: '选项 5', value: '5' });
  };

  const handleClearSingle = () => {
    setSingleValue(undefined);
  };

  const handleResetMulti = () => {
    setMultiValue([
      { label: '选项 15', value: '15' },
      { label: '选项 25', value: '25' },
      { label: '选项 35', value: '35' },
    ]);
  };

  const handleClearMulti = () => {
    setMultiValue([]);
  };

  return (
    <div style={{ padding: 24 }}>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        {/* <Card title="MySelect 单选测试" style={{ maxWidth: 500 }}>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            <div>
              <h4>测试说明：</h4>
              <ul>
                <li>默认回填值为 15（第二页的数据）</li>
                <li>下拉滚动可加载更多数据</li>
              </ul>
            </div>

            <div>
              <h4>当前选中值：{singleValue?.value ?? '无'}</h4>
              <MySelect
                style={{ width: '100%' }}
                placeholder="请选择"
                value={singleValue}
                onChange={setSingleValue}
                request={fetchSelectData}
                pageSize={10}
              />
            </div>

            <Space>
              <Button type="primary" onClick={handleResetToPage2}>
                回填第二页数据 (ID: 15)
              </Button>
              <Button onClick={handleResetToPage1}>
                回填第一页数据 (ID: 5)
              </Button>
              <Button danger onClick={handleClearSingle}>
                清空
              </Button>
            </Space>
          </Space>
        </Card> */}

        <Card title="MySelect 多选测试" style={{ maxWidth: 600 }}>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            <div>
              <h4>测试说明：</h4>
              <ul>
                <li>默认回填值为 [15, 25, 35]（分布在第二、三、四页）</li>
                <li>下拉滚动可加载更多数据</li>
                <li>支持多选和回填跨页数据</li>
              </ul>
            </div>

            <div>
              <h4>
                当前选中值：
                {multiValue.length > 0
                  ? multiValue.map((v) => v.value).join(', ')
                  : '无'}
              </h4>
              <GSelect
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="请选择（支持多选）"
                value={multiValue}
                onChange={(val) => setMultiValue(val as OptionItem[])}
                request={fetchSelectData}
                pageSize={10}
                maxTagCount={5}
              />
            </div>

            <Space>
              <Button type="primary" onClick={handleResetMulti}>
                回填跨页数据 (ID: 15, 25, 35)
              </Button>
              <Button danger onClick={handleClearMulti}>
                清空
              </Button>
            </Space>

            <div style={{ color: '#666', fontSize: 12 }}>
              <p>数据分布：</p>
              <ul>
                <li>第一页：ID 1-10</li>
                <li>第二页：ID 11-20（包含 15）</li>
                <li>第三页：ID 21-30（包含 25）</li>
                <li>第四页：ID 31-40（包含 35）</li>
                <li>...</li>
              </ul>
            </div>
          </Space>
        </Card>
      </Space>
    </div>
  );
}
