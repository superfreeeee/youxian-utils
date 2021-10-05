/**
 * 时间相关
 */
/**
 * 创建准确延迟的计时器
 * @param delay
 * @returns
 */
export declare const createSpecificTimer: (delay: number) => {
    reset: () => void;
    next: (fn: () => void) => () => void;
};
