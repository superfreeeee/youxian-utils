/**
 * 优化类型工具函数
 */

/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */
export const debounce = (fn: Function, delay: number) => {
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
export const throttle = (fn: Function, delay: number) => {
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

interface OnceFn<T> {
  (...args: any[]): T;
}

/**
 * Create copied function that invoke only once and remember result
 * @param fn
 * @returns
 */
export const once = <T>(fn: OnceFn<T>): OnceFn<T> => {
  let result = null;
  let done = false;

  return (...args) => {
    if (!done) {
      result = fn(...args);
      done = true;
      fn = null; // release reference of fn for memory optimization
    }

    return result;
  };
};
