import { useEffect, DependencyList } from 'react';

const useUpdate = (fn: () => any, deps?: DependencyList): void => {
  useEffect(fn, deps);
};

export default useUpdate;
