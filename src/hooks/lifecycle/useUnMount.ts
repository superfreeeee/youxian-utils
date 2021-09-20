import { useEffect } from 'react';

/**
 * componentWillUnMount hook 版本
 * @param fn
 */
const useUnMount = (fn: () => any): void => {
  useEffect(() => fn, []);
};

export default useUnMount;
