/**
 * 优化类型工具函数
 */

// 默认防抖间隔
const DEFAULT_DEBOUNCE_DELAY = 300;
// 默认截流间隔
const DEFAULT_THROTTLE_DELAY = 300;

/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */
export const debounce = (
  fn: Function,
  delay: number = DEFAULT_DEBOUNCE_DELAY
) => {
  let timer: number | null = null;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = (setTimeout as Window['setTimeout'])(() => {
      fn(...args);
    }, delay);
  };
};

/**
 * 截流
 * @param fn
 * @param delay 毫秒
 * @returns
 */
export const throttle = (
  fn: Function,
  delay: number = DEFAULT_THROTTLE_DELAY
) => {
  let lock = false;

  return (...args: any[]) => {
    if (lock) {
      return;
    }
    lock = true;
    setTimeout(() => {
      fn(...args);
      lock = false;
    }, delay);
  };
};
