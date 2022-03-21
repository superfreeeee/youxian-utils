import { useEffect, useRef } from 'react';

/**
 * componentWillUnMount hook 版本
 * @param fn
 */
export const useUnMount = (fn: VoidFunction): void => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => fnRef.current, []);
};

export default useUnMount;
