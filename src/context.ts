import { ConfigProvider } from 'antd';
import { useContext } from 'react';

export const useConfigProvider = () => {
  return useContext(ConfigProvider.ConfigContext);
};

export const usePrefixCls = (className: string) => {
  const { getPrefixCls } = useConfigProvider();
  return getPrefixCls(className);
};
