import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

test('test useState', () => {
  let updateCount = 0;

  const { result } = renderHook(() => {
    updateCount++;
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    return { count, increment, reset };
  });

  expect(updateCount).toBe(1);
  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(updateCount).toBe(2);
  expect(result.current.count).toBe(1);

  act(() => {
    result.current.increment();
  });

  expect(updateCount).toBe(3);
  expect(result.current.count).toBe(2);

  act(() => {
    result.current.reset();
  });

  expect(updateCount).toBe(4);
  expect(result.current.count).toBe(0);

  act(() => {
    result.current.reset();
  });

  expect(updateCount).toBe(5);
  expect(result.current.count).toBe(0);
});
