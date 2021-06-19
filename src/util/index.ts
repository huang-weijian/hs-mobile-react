/**
 * 深拷贝某个数据项
 * deep clone data
 * @param data
 * @param reviver
 */
export function clone<T>(
  data: T,
  reviver?: (this: any, key: string, value: any) => any
): T {
  return JSON.parse(JSON.stringify(data), reviver);
}
