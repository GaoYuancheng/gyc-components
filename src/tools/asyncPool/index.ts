type AsyncPool = (
  /** 异步请求数组 */
  promiseList: (() => Promise<any>)[],
  /** 最大并发数 */
  limit: number,
) => Promise<any[]>;

const asyncPool: AsyncPool = async (promiseList, limit) => {
  // 用于保存所有异步请求
  const ret = [];
  // 用户保存正在进行的请求
  const executing = new Set();
  for (const request of promiseList) {
    // 构造出请求 Promise
    const p = request();
    ret.push(p);
    executing.add(p);
    // 请求执行结束后从正在进行的数组中移除
    const clean = () => executing.delete(p);

    p.then(clean).catch(clean);
    // 如果正在执行的请求数大于并发数，就使用 Promise.race 等待一个最快执行完的请求
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(ret);
};

export default asyncPool;
