import { ChangeEventHandler, useCallback, useState } from 'react';

/**
 * 使用输入框数据
 * @param initValue
 * @returns
 */
const useInput = <T extends HTMLInputElement>(initValue: string): [string, ChangeEventHandler<T>] => {
  const [value, setValue] = useState(initValue);

  const handleInputChange: ChangeEventHandler<T> = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handleInputChange];
};

export default useInput;
