declare type ForceUpdateFn = () => void;
/**
 * 导出强制更新组件函数
 * @returns
 */
declare const useForceUpdate: () => ForceUpdateFn;
export default useForceUpdate;
