import { useState } from 'react';

type ForceUpdateFn = () => void;

/**
 * 导出强制更新组件函数
 * @returns
 */
const useForceUpdate = (): ForceUpdateFn => {
  const [, forceUpdate] = useState<void>();

  return forceUpdate;
};

export default useForceUpdate;
