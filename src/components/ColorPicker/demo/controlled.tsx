import { ColorPicker, ColorPickerProps } from 'gyc-components';
import React, { useState } from 'react';

const ColorPickerControlled = () => {
  const [color, setColor] = useState<ColorPickerProps['value']>('#ffffff');

  const onChange = (color: ColorPickerProps['value']) => {
    setColor(color);
  };

  return (
    <div>
      <div>{color}</div>
      <ColorPicker value={color} onChange={onChange} />
    </div>
  );
};

export default ColorPickerControlled;
