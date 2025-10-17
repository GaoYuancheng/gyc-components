export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const mockRequest = async <T = undefined>(
  params?: any,
  resData?: T,
): Promise<T> => {
  await sleep(1000);
  return structuredClone(resData) as T;
};
