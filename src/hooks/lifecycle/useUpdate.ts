import { useEffect } from 'react';

const useUpdate = (fn: () => any): void => {
  useEffect(fn);
};

export default useUpdate;
