/**
 * 随机相关函数
 */

/**
 * 随机布尔值
 * @returns
 */
export const randomBoolean = (): boolean => Math.random() > 0.5;

/**
 * 随机整数, min <= res < max
 * @param min
 * @param max
 * @returns
 */
export function randomInt(): number;
export function randomInt(max: number): number;
export function randomInt(
  min?: number | undefined,
  max?: number | undefined,
): number {
  if (min === undefined) {
    [min, max] = [0, 1];
  } else if (max === undefined) {
    [min, max] = [0, min];
  }

  return Math.floor(Math.random() * (max - min) + min);
}
