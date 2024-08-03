import { useRef } from 'react';

/**
 * Count render times of Component
 */
export const useRenderCount = (): number => {
  const countRef = useRef(0);
  countRef.current++;
  return countRef.current;
};
