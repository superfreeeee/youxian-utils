import { renderHook, act } from '@testing-library/react-hooks';

import useForceUpdate from '../useForceUpdate';

test('test useForceUpdate', () => {
  let updateCount = 0;

  const { result, rerender } = renderHook(() => {
    updateCount++;

    const forceUpdate = useForceUpdate();

    return { forceUpdate };
  });

  // 首次渲染
  expect(updateCount).toBe(1);

  // 更新 1 次
  rerender();

  expect(updateCount).toBe(2);

  // 更新 2 次
  act(() => {
    result.current.forceUpdate();
  });

  expect(updateCount).toBe(3);

  // 更新 3 次
  act(() => {
    result.current.forceUpdate();
  });

  expect(updateCount).toBe(4);
});
