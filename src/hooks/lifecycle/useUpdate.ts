import { useEffect, DependencyList } from 'react';

/**
 * alias for useEffect
 */
export const useUpdate = (fn: () => any, deps?: DependencyList): void => {
  useEffect(fn, deps);
};

export default useUpdate;
