import React, { useEffect } from 'react';
import tool1 from '../index';

const Tool1base = () => {
  useEffect(() => {
    tool1();
  }, []);

  return <div>tool1base</div>;
};

export default Tool1base;
