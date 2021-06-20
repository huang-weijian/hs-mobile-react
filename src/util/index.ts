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

/**
 * 获取popup的index
 * get popup index
 */
export const operaIndex = (function (): {
  get: () => number;
  reduc: () => void;
} {
  let zIndex = 2000;
  return {
    get: function () {
      return ++zIndex;
    },
    // todo
    reduc: function () {
      zIndex--;
    },
  };
})();
