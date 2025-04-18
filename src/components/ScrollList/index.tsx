import { Empty, Spin, message } from 'antd';
import classNames from 'classnames';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import './index.less';

type Pagination = {
  current: number;
  pageSize: number;
};
type Total = number;

type Item = any;

export interface ScrollListProps {
  defaultPagination?: Pagination;
  request: (
    pagination: Pagination,
    params: ScrollListProps['params'],
  ) => Promise<{
    list: Item[];
    total: Total;
  }>;
  className?: string;
  // TODO: 根据request返回参数推断
  childrenRender: (item: Item) => React.ReactNode;
  params?: Record<string, any>;
}

const ScrollList: React.FC<ScrollListProps> = ({
  request,
  className,
  defaultPagination = {
    pageSize: 10,
    current: 1,
  },
  params,
  childrenRender,
}) => {
  const [list, setList] = useState<any[]>([]);
  const [pagination, setPagination] = useState<
    Pagination & {
      total: Total;
    }
  >({
    ...defaultPagination,
    total: 0,
  });
  const { current, pageSize, total } = pagination;
  const [loading, setLoading] = useState(false);

  const getData = async (
    current: Pagination['current'],
    pageSize: Pagination['pageSize'],
  ) => {
    setLoading(true);
    const { list: resList = [], total = 0 } = await request(
      { current, pageSize },
      params,
    );
    setList(current === 1 ? resList : [...list, resList]);
    setPagination({
      total,
      pageSize,
      current,
    });
    setLoading(false);
  };

  // TODO: e类型
  const onScroll = async (e: any) => {
    if (loading) return;
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight === scrollHeight) {
      // 触底
      if (pageSize * current >= total) {
        message.info('已经到底啦');
        return;
      }
      getData(current + 1, pageSize);
    }
  };

  useEffect(
    () => {
      getData(1, pageSize);
    },
    params ? [params] : [],
  );

  return (
    <Spin spinning={loading}>
      {(!list.length || !list) && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
      )}
      <div
        className={classNames(className, 'scrollList')}
        onScroll={(e) => {
          e.persist();
          onScroll(e);
        }}
      >
        {list.map(childrenRender)}
      </div>
    </Spin>
  );
};

export default ScrollList;
