import { MutableRefObject, useRef } from 'react';

/**
 * Turn state or other value into RefObject
 */
export const useClosestRef = <T>(val: T): MutableRefObject<T> => {
  const valRef = useRef(val);
  valRef.current = val;
  return valRef;
};

export default useClosestRef;
