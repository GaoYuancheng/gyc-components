import { tool1 } from 'gyc-components';
import React, { type FC } from 'react';
import { util1 } from './util';

const Foo: FC<{ title: string }> = (props) => {
  tool1();
  util1();
  return <h4>{props.title}</h4>;
};

export default Foo;
