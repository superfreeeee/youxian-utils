import { useState, useCallback } from 'react';

type ForceUpdateFn = () => void;

/**
 * 导出强制更新组件函数
 * @returns
 */
const useForceUpdate = (): ForceUpdateFn => {
  const [bool, setBool] = useState(false);

  const forceUpdate = useCallback(() => setBool(!bool), [bool]);

  return forceUpdate;
};

export default useForceUpdate;
