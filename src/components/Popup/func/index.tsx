/**
 * 获取popup的index  get popup index
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
    reduc: function () {
      zIndex--;
    },
  };
})();
