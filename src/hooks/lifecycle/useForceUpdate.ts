import { useReducer } from 'react';

/**
 * Return force re-render method
 * @returns
 */
const useForceUpdate = (): (() => void) => {
  const [, forceUpdate] = useReducer((bool) => !bool, false);
  return forceUpdate;
};

export default useForceUpdate;
