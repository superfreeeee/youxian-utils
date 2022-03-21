/**
 * 函数相关
 */

/**
 * 空函数
 */
export const noop = () => {};

/**
 * 计算属性
 * ex:
 * ```ts
 *   const num = computed
 * ```
 */
export function computed<T>(compute: (...args: any[]) => T, ...args: any): T;
export function computed<T>(
  compute: (...args: any[]) => Promise<T>,
  ...args: any
): Promise<T>;
export function computed<T>(
  compute: (...args: any[]) => T | Promise<T>,
  ...args: any
): T | Promise<T> {
  return compute(...args);
}

interface B {
  b: number;
}

interface A {
  a: number;
  b: B;
}

const a: Readonly<A> = {
  a: 1,
  b: {
    b: 2,
  },
};

a.b.b = 2;
