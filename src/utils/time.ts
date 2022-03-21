/**
 * 时间相关
 */

interface Timer {
  /**
   * Reset startTime
   */
  reset: VoidFunction;

  /**
   * Execute fn in configed delay
   * and return cancel function
   */
  next: (fn: VoidFunction) => VoidFunction;
}

/**
 * 创建准确延迟的计时器
 * @param delay
 * @returns
 */
export const createTimer = (delay: number): Timer => {
  let startTime = Date.now();

  const reset = () => {
    startTime = Date.now();
  };

  const next = (fn: VoidFunction) => {
    const restDelay = Math.max(startTime + delay - Date.now(), 0);
    const timer = setTimeout(fn, restDelay);
    return () => {
      clearTimeout(timer);
    };
  };

  return { reset, next };
};

/**
 * Create a Promise for synchronous
 * @param delay resolve in delay ms
 * @returns
 */
export const wait = (delay: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
