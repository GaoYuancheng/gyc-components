import { message, Select } from 'antd';
import { debounce } from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';

const pageSize = 10;
const total = 20;

const sleep = (time: number) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, time);
  });

const getListReq = async (params: { current: number; keyWords: string }) => {
  console.log('params', params);
  const { current } = params;
  await sleep(2000);
  return {
    total: 20,
    pages: 2,
    list: new Array(pageSize).fill(0).map((_, index) => {
      return {
        value: (current - 1) * pageSize + index + 1,
        label: (current - 1) * pageSize + index + 1,
      };
    }),
  };
};

const SelectWithScroll = () => {
  const loadingRef = useRef(false);

  const [options, setOptions] = useState<any>([]);

  const [searchData, setSearchData] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
    searchValue: '',
  });

  const {
    pagination: { current, pageSize, total },
    searchValue,
  } = searchData;

  const request = async (current: any, searchValue: any) => {
    console.log('req', current, searchValue);
    loadingRef.current = true;
    const { list, total } = await getListReq({
      keyWords: searchValue,
      current,
      // pageSize: 10,
    });
    if (current === 1) {
      setOptions(list);
    } else {
      setOptions([...options, ...list]);
    }

    setSearchData({
      ...searchData,
      pagination: {
        ...searchData?.pagination,
        current,
        total,
      },
    });
    loadingRef.current = false;
  };

  const onPopupScroll = (e: any) => {
    e.persist();
    const { target } = e;
    if (loadingRef.current) return;
    // 滚动 触底 看接口是否还有剩余的值没传过来
    if (target.scrollHeight - target.scrollTop - target.offsetHeight < 10) {
      if (current * pageSize < total) {
        request(current + 1, searchValue);
      } else {
        message.info('没有更多数据了');
      }
    }
  };

  // 搜索条件变化时，current变成1，
  const onSearch = (value: any) => {
    request(1, value);
  };

  useEffect(() => {
    onSearch('');
  }, []);

  return (
    <Select
      showSearch
      placeholder="输入或选择项目名称搜索"
      defaultActiveFirstOption={false}
      filterOption={false}
      onSearch={debounce(onSearch, 500)}
      allowClear={true}
      onPopupScroll={debounce(onPopupScroll, 500)}
      style={{ width: 290 }}
      options={options}
    />
  );
};

export default SelectWithScroll;
