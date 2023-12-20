import { useState } from 'react';

const useHook1 = () => {
  const [state, setState] = useState({});
  return { state };
};

export default useHook1;
