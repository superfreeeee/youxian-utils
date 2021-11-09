import { useEffect, useRef } from 'react';

/**
 * componentWillUnMount hook 版本
 * @param fn
 */
const useUnMount = (fn: () => any): void => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => fnRef.current(), []);
};

export default useUnMount;
