import { ColorPicker } from 'gyc-components';
import React from 'react';

const ColorPickerBase = () => {
  const onChange = (value?: string) => {
    console.log('onChange', value);
  };
  return <ColorPicker onChange={onChange} defaultValue="#ffffff" />;
};

export default ColorPickerBase;
