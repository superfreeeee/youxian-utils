/**
 * 算数相关函数
 */

/**
 * 加总
 * @param nums
 * @returns
 */
export const sum = (...nums: number[]): number =>
  nums.reduce((sum, next) => sum + next, 0);

/**
 * 平均数
 * @param nums
 * @returns
 */
export const average = (...nums: number[]) => sum(...nums) / nums.length;

/**
 * 判断偶数
 * @param num
 * @returns
 */
export const isEven = (num: number) => num % 2 === 0;

/**
 * 判断奇数
 * @param num
 * @returns
 */
export const isOdd = (num: number) => num % 2 === 1;

/**
 * Create a numer sequence
 * @param start
 * @param end
 * @param step
 * @returns
 */
export function range(end: number): number[];
export function range(start: number, end: number): number[];
export function range(start: number, end: number, step: number): number[];
export function range(
  start: number,
  end?: number | undefined,
  step?: number | undefined,
): number[] {
  if (end === undefined) {
    // end -> [0, end, 1]
    [start, end, step] = [0, start, 1];
  } else if (step === undefined) {
    // start, end -> [start, end, 1]
    [start, end, step] = [start, end, 1];
  }

  return Array.from(
    { length: (end - start) / step },
    (_, i) => start + i * step,
  );
}
