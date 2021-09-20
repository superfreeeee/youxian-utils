import { useEffect } from 'react';

/**
 * componentDidMount hook 版本
 * @param fn
 */
const useMount = (fn: () => void): void => {
  useEffect(fn, []);
};

export default useMount;
