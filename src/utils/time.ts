/**
 * 时间相关
 */

/**
 * 创建准确延迟的计时器
 * @param delay
 * @returns
 */
export const createSpecificTimer = (delay: number) => {
  let startTime = Date.now();

  const reset = () => {
    startTime = Date.now();
  };

  const next = (fn: () => void) => {
    const restDelay = Math.max(startTime + delay - Date.now(), 0);
    const timer = setTimeout(fn, restDelay);
    return () => {
      clearTimeout(timer);
    };
  };

  return { reset, next };
};
