type GetArgsFromFunc<T extends (...args: any) => any> = T extends (
  ...arg: infer R
) => any
  ? R
  : unknown;
