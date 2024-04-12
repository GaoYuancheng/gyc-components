import { Select } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
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
  const inputRef = useRef<any>();

  const setInputValue = (value?: string) => {
    inputRef.current.value = value;
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (defaultValue && !value) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div>
      <input
        ref={inputRef}
        type="color"
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default ColorPicker;
