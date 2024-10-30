import {
  Form,
  FormInstance,
  Input,
  message,
  Modal,
  ModalProps,
  Space,
} from 'antd';
import { ContentRenderProps, useModal } from 'gyc-components';
import React, { useEffect, useState } from 'react';

interface EditModalProps extends ModalProps {
  data: any;
  onSuccess: (values: any) => void;
}

const EditModal: React.FC<EditModalProps> = ({ ...props }) => {
  const { data, open, onSuccess } = props;

  const isEdit = data?.id;

  const [form] = Form.useForm();

  const init = async () => {
    form.setFieldsValue(data);
  };

  useEffect(() => {
    if (!open) return;
    if (isEdit) {
      // 编辑回填
      init();
    }
  }, [open]);

  const onOk = async () => {
    const values = await form.validateFields();
    if (data?.id) {
      console.log('编辑', values);
    } else {
      // 新建
      console.log('新建', values);
    }
    onSuccess(values);
  };

  return (
    <Modal onOk={onOk} title={isEdit ? '编辑' : '新建'} {...props}>
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
    </Modal>
  );
};

const UseModalDifferentOptions = () => {
  const [content, setContent] = useState('');

  const editModal = useModal(EditModal, {
    onSuccess: (values) => {
      setContent(values.content);
      close();
    },
  });

  return (
    <div>
      <div>content: {content}</div>
      <Space>
        <a
          onClick={() => {
            editModal.open();
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
            editModal.open({
              data,
            });
          }}
        >
          编辑
        </a>
      </Space>

      {editModal.modalDom}
    </div>
  );
};

export default UseModalDifferentOptions;
