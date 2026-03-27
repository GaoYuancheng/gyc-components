import type { SelectProps } from 'antd';
import { Select, Spin } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface OptionItem {
  label: string;
  value: string;
}

// 1. 初始化 setValue 直接先set一份 missingOptions
// 2. 加载分页数据时，重新判断 missingOptions。

export interface MySelectProps
  extends Omit<SelectProps<any>, 'options' | 'loading' | 'value' | 'onChange'> {
  /** 获取数据的函数 */
  request: (params: { page: number; pageSize: number }) => Promise<{
    list: Array<{ label: string; value: any }>;
    total: number;
  }>;
  /** 每页数据条数 */
  pageSize?: number;
  /** 当前选中的值，支持单选和多选 */
  value?: OptionItem | OptionItem[];
  /** 选中值变化时的回调 */
  onChange?: (value: OptionItem | OptionItem[] | undefined) => void;
}

/**
 * MySelect 组件 - 封装 antd Select，支持分页加载和回填数据
 * @description 默认加载第一页数据，下拉滚动加载下一页，支持回填数据
 */
export default function MySelect({
  request,
  pageSize = 10,
  value,
  onChange,
  ...restProps
}: MySelectProps) {
  const [options, setOptions] = useState<OptionItem[]>([]);
  const [missingOptions, setMissingOptions] = useState<OptionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState<{
    total: number;
    current: number;
    pageSize: number;
  }>({
    total: 0,
    current: 1,
    pageSize,
  });

  const optionsMapRef = useRef<Record<string, OptionItem>>({});

  const getMissingOptions = () => {
    if (!value) return [];
    if (Array.isArray(value))
      return value.filter((item) => !optionsMapRef.current[item.value]);
    return [value];
  };

  /**
   * 加载指定页的数据
   */
  const loadData = async (page: number) => {
    if (loading) return;
    setLoading(true);

    const result = await request({ page, pageSize }).finally(() =>
      setLoading(false),
    );
    result.list.forEach((item) => {
      optionsMapRef.current[item.value] = item;
    });

    const missingOptions = getMissingOptions();

    const newOptions = result.list || [];

    setMissingOptions(missingOptions);

    if (page === 1) {
      setOptions((prev) => [...newOptions]);
    } else {
      setOptions((prev) => [...prev, ...newOptions]);
    }

    setPageInfo({
      ...pageInfo,
      current: page,
      total: result.total || 0,
    });
  };

  useEffect(() => {
    const missingOptions = getMissingOptions();
    setMissingOptions(missingOptions);
  }, [value]);

  /**
   * 处理下拉滚动事件，实现无限滚动加载
   */
  const handlePopupScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    if (
      scrollHeight - scrollTop <= clientHeight + 10 &&
      !loading &&
      pageInfo.current < pageInfo.total / pageInfo.pageSize
    ) {
      loadData(pageInfo.current + 1);
    }
  };

  /**
   * 处理下拉框展开事件
   */
  const handleDropdownVisibleChange = (open: boolean) => {
    if (open && options.length === 0 && !loading) {
      loadData(1);
    }
    if (restProps.onDropdownVisibleChange) {
      restProps.onDropdownVisibleChange(open);
    }
  };

  /**
   * 转换 value 为 antd Select 需要的格式
   */
  const showedValue = useMemo(() => {
    if (!value) return undefined;
    if (Array.isArray(value)) {
      return value.map((v) => v.value);
    }
    return value?.value;
  }, [value]);

  useEffect(() => {
    loadData(1);
  }, []);

  return (
    <Select
      value={showedValue}
      onChange={(v, node) => {
        onChange?.(node);
      }}
      options={[...missingOptions, ...options]}
      loading={loading}
      onPopupScroll={handlePopupScroll}
      onDropdownVisibleChange={handleDropdownVisibleChange}
      dropdownRender={(menu) => (
        <>
          {menu}
          {loading && (
            <div style={{ padding: '8px', textAlign: 'center' }}>
              <Spin size="small" />
            </div>
          )}
        </>
      )}
      filterOption={false}
      showSearch={false}
      {...restProps}
    />
  );
}
