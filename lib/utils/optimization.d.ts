/**
 * 优化类型工具函数
 */
/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */
export declare const debounce: (fn: Function, delay?: number) => (...args: any[]) => void;
/**
 * 截流
 * @param fn
 * @param delay 毫秒
 * @returns
 */
export declare const throttle: (fn: Function, delay?: number) => (...args: any[]) => void;
/**
 * 缓存函数执行结果
 * @param fn
 * @returns
 */
export declare const cache: <T>(fn: (...args: any[]) => T) => (...args: any[]) => T;
