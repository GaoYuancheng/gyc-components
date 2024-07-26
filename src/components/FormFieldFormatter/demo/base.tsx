import { Col, Form, Row, Select } from 'antd';
import { FormFieldFormatter } from 'gyc-components';
import React, { useState } from 'react';

const FormFieldFormatterBase = () => {
  const [formValue, setFormValue] = useState({});

  return (
    <Row justify="space-evenly">
      <Col span={10}>
        <Form
          onValuesChange={(values, allValues) => {
            console.log('onValuesChange', allValues);
            setFormValue(allValues);
          }}
        >
          <Form.Item label="selectInfo" name="selectInfo">
            <FormFieldFormatter
              formatValue={(value) => value?.value}
              formatOnChange={(value) => value?.[1]}
            >
              <Select
                onChange={(value, options) =>
                  console.log('value', value, options)
                }
                options={[
                  {
                    label: 'label1',
                    value: '1',
                    param1: 'param1',
                  },
                  {
                    label: 'label2',
                    value: '2',
                    param1: 'param2',
                  },
                ]}
              />
            </FormFieldFormatter>
          </Form.Item>
        </Form>
      </Col>
      <Col span={10}>
        <pre>{JSON.stringify(formValue, null, 2)}</pre>
      </Col>
    </Row>
  );
};

export default FormFieldFormatterBase;
