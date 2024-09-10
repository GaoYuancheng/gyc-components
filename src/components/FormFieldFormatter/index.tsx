import React, { Children, PropsWithChildren } from 'react';

interface Props {
  // TODO: 实际上是 来判断 children['onChange']
  onChange?: (value: Props['value']) => void;
  // TODO: 实际上是 来判断 children['value']
  value?: any;
  /** 回显时 调整展示的 value */
  formatValue?: (value: Props['value']) => any;
  /** 在 onChange 中处理抛出的value 参数与 children.props.onChange 一致 */
  formatOnChange?: (...arg: any) => Props['value'];
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
        value = formatOnChange(...rest);
      }
      (children as any).props.onChange?.(...rest);
      onChange?.(value);
    },
    value: formatValue ? formatValue(value) : value,
  });
};

export default FormFieldFormatter;
