import { useReducer } from 'react';

/**
 * Return force re-render method
 * @returns
 */
export const useForceUpdate = (): (() => void) => {
  const [, forceUpdate] = useReducer(() => ({}), null);
  return forceUpdate;
};

export default useForceUpdate;
