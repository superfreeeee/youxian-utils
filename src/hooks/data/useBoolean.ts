import { useCallback, useState } from 'react';

interface IUseBooleanUtils {
  setTrue: VoidFunction;
  setFalse: VoidFunction;
  toggle: VoidFunction;
}

type IRes = [boolean, IUseBooleanUtils];

/**
 * use bool state
 * @param initValue
 * @returns
 */
export const useBoolean = (initValue: boolean = false): IRes => {
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
