import { asyncPool } from 'gyc-components';
import React, { useEffect } from 'react';

// 请求示例
const request = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

// 使用方法

const Tool1base = () => {
  const [res1, setRes1] = React.useState<any>([]);
  const [res2, setRes2] = React.useState<any>([]);
  const [res3, setRes3] = React.useState<any>([]);
  const onClick = async () => {
    const res = await asyncPool(
      [
        () => request(2000).then((data) => setRes1(data)),
        () => request(5000).then((data) => setRes2(data)),
        () => request(4000).then((data) => setRes3(data)),
      ],
      2,
    );
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button type="button" onClick={onClick}>
        开始请求
      </button>
      <div>res1: {res1}</div>
      <div>res2: {res2}</div>
      <div>res3: {res3}</div>
    </div>
  );
};

export default Tool1base;
