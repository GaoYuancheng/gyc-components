import React, { PropsWithChildren } from 'react';

interface Props {
  onChange?: (value: Props['value']) => void;
  value?: any;
  formatValue?: (value: Props['value']) => any;
  formatOnChange?: (values: any[]) => any;
}

const FormFieldFormatter: React.FC<PropsWithChildren<Props>> = ({
  onChange,
  value,
  formatOnChange,
  formatValue,
  children,
}) => {
  if (!children) {
    return null;
  }
  return React.cloneElement(children as any, {
    onChange: (...rest: any) => {
      let value = rest[0];
      if (formatOnChange) {
        value = formatOnChange(rest);
      }
      (children as any).props.onChange?.(...rest);
      onChange?.(value);
    },
    value: formatValue ? formatValue(value) : value,
  });
};

export default FormFieldFormatter;
