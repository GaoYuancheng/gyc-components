import { Form, FormInstance, Input } from 'antd';
import { ContentRenderProps, useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface UseDetailModalProps {
  onOkAfter?: () => void;
}

interface DetailContentProps extends ContentRenderProps {
  form: FormInstance;
}

const DetailContent: React.FC<DetailContentProps> = ({
  data,
  form,
  modalProps,
}) => {
  const init = async () => {
    form.setFieldsValue(data);
  };

  useEffect(() => {
    if (modalProps.open) {
      init();
    }
  }, [modalProps.open]);

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
      <Form.Item label="id" name="id">
        <Input />
      </Form.Item>
      <Form.Item label="content" name="content">
        <Input />
      </Form.Item>
    </Form>
  );
};

const useDetailContentModal = ({ onOkAfter }: UseDetailModalProps) => {
  const [form] = Form.useForm();

  const modal = useModal({
    contentRender: ({ data, modalProps }) => (
      <DetailContent data={data} form={form} modalProps={modalProps} />
    ),
    title: 'DetailContent',
    onOk: async () => {
      const data = await form.validateFields();
      onOkAfter?.();
      modal.close();
    },
  });

  return modal;
};

const UseModalBase = () => {
  const [count, setCount] = useState(0);
  const { open, modalDom } = useDetailContentModal({
    onOkAfter: () => {
      setCount((prev) => prev + 1);
    },
  });

  return (
    <div>
      {count}
      <div
        onClick={() => {
          open({
            data: {
              id: 1,
              content: 'content',
            },
          });
        }}
      >
        UseModalBase
      </div>

      {modalDom}
    </div>
  );
};

export default UseModalBase;
