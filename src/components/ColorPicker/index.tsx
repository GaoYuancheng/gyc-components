import { Select } from 'antd';
import React, { useEffect } from 'react';
import './index.less';

export interface ColorPickerProps {
  value?: string;
  onChange?: (value: ColorPickerProps['value']) => void;
  defaultValue?: ColorPickerProps['value'];
  disabled?: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  defaultValue,
  disabled,
}) => {
  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <div>
      <input type="color" disabled={disabled} defaultValue={defaultValue} />
    </div>
  );
};

export default ColorPicker;
