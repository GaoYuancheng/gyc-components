import { Form, FormInstance, Input, message, Space } from 'antd';
import { ContentRenderProps, useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface EditContentProps extends ContentRenderProps {
  form: FormInstance;
}

const EditContent: React.FC<EditContentProps> = ({ form }) => {
  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item label="content" name="content">
        <Input />
      </Form.Item>
    </Form>
  );
};

const UseModalDifferentOptions = () => {
  const [content, setContent] = useState('');
  const [form] = Form.useForm();

  const { open, close, modalDom } = useModal({
    afterClose: () => {
      form.resetFields();
    },
  });

  return (
    <div>
      <div>content: {content}</div>
      <Space>
        <a
          onClick={() => {
            const data = {};
            open({
              title: '新建',
              onOk: async () => {
                const values = await form.validateFields();
                message.success('操作成功');
                close();
                setContent(values.content);
              },
              content: <EditContent form={form} />,
            });
          }}
        >
          新建
        </a>
        <a
          onClick={() => {
            const data = {
              content,
              id: 11,
            };
            open({
              title: '编辑',
              onOk: async () => {
                const values = await form.validateFields();
                message.success('操作成功');
                close();
                setContent(values.content);
              },
              content: <EditContent form={form} />,
            });

            form.setFieldsValue(data);
          }}
        >
          编辑
        </a>
      </Space>

      {modalDom}
    </div>
  );
};

export default UseModalDifferentOptions;
