import React from 'react';
import useHook1 from '../index';

const UseHook1Base = () => {
  const { state } = useHook1();

  return <div>UseHook1Base</div>;
};

export default UseHook1Base;
