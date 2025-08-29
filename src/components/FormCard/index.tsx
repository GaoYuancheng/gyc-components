import { useRequest } from 'ahooks';
import { Button, Card, CardProps, Form } from 'antd';
import { FormItemProps } from 'antd/es/form';
import React from 'react';

type GetPromiseReturnType<T extends (...args: any[]) => Promise<any>> =
  T extends (...args: any[]) => Promise<infer R> ? R : unknown;

export interface FormCardProps extends CardProps {
  params?: Record<string, any>;
  formItems?: {
    label?: string;
    name: string;
    children: React.ReactNode;
    formItemProps?: FormItemProps;
  }[];
  request: (
    params: FormCardProps['params'] & Record<string, any>,
  ) => Promise<any>;
  childrenRender: (
    data: GetPromiseReturnType<FormCardProps['request']>,
  ) => React.ReactNode;
  detailHref?: string;
}

const FormCard: React.FC<FormCardProps> = ({
  request,
  params,
  formItems = [],
  childrenRender,
  detailHref,
  ...rest
}) => {
  const [form] = Form.useForm();

  const { data, loading, run } = useRequest(() => getData(), {
    refreshDeps: [JSON.stringify(params)],
  });

  const getData = async () => {
    const values = await form.validateFields();

    const requestParams = {
      // 表单值优先
      ...values,
      ...params,
    };

    const res = await request(requestParams);
    return res;
  };

  const cardExtra = (
    <Form
      form={form}
      onValuesChange={(_, values) => {
        run();
      }}
      layout="inline"
    >
      {formItems.map((item) => {
        const { formItemProps = {}, name, label } = item;
        return (
          <Form.Item key={name} name={name} label={label} {...formItemProps}>
            {item.children}
          </Form.Item>
        );
      })}

      {detailHref && (
        <Form.Item>
          <a type="link" href={detailHref}>
            详情 &gt;
          </a>
        </Form.Item>
      )}
    </Form>
  );

  return (
    <Card
      bodyStyle={{
        height: 250,
      }}
      loading={loading}
      extra={cardExtra}
      {...rest}
    >
      {childrenRender(data)}
    </Card>
  );
};

export default FormCard;
