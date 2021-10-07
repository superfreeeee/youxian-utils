/**
 * 算数相关函数
 */

/**
 * 加总
 * @param nums
 * @returns
 */
export const sum = (...nums: number[]): number => nums.reduce((sum, next) => sum + next, 0);

/**
 * 平均数
 * @param nums
 * @returns
 */
export const average = (...nums: number[]) => sum(...nums) / nums.length;
