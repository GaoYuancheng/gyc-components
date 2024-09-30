import { Col, Form, Row, Switch } from 'antd';
import { ClickWrap, GUpload } from 'gyc-components';
import React, { useState } from 'react';

const ClickWrapBase = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({});
  const [readonly, setReadonly] = useState(false);

  return (
    <>
      <Row justify="space-evenly">
        <Col span={10}>
          <Form
            onValuesChange={(values, allValues) => {
              console.log('onValuesChange', allValues);
              setFormValue(allValues);
            }}
          >
            <Form.Item label="readonly">
              <Switch onChange={(value) => setReadonly(value)}></Switch>
            </Form.Item>
            <Form.Item label="附件" name="upload">
              <GUpload readonly={readonly} />
            </Form.Item>
          </Form>
        </Col>
        <Col span={10}>
          <pre>{JSON.stringify(formValue, null, 2)}</pre>
        </Col>
      </Row>
    </>
  );
};

export default ClickWrapBase;
