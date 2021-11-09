import { useCallback, useState } from 'react';

/**
 * bool 值
 * @param initValue
 * @returns
 */
const useBoolean = (
  initValue: boolean = false
): [
  boolean,
  {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
  }
] => {
  const [state, setState] = useState(initValue);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState(!state);
  }, [state]);

  return [state, { setTrue, setFalse, toggle }];
};

export default useBoolean;
