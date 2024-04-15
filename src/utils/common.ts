export const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

export const isString = (value: unknown): value is string =>
  typeof value === 'string';

export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';

// export const isString1 = (value: any): boolean => typeof value === 'string';

// const foo = (val: unknown) => (isString(val) ? val.toUpperCase() : val);
