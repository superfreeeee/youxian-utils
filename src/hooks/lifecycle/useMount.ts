import { useEffect } from 'react';

/**
 * componentDidMount in hook version
 * @param fn
 */
export const useMount = (fn: VoidFunction): void => {
  useEffect(fn, []);
};

export default useMount;
