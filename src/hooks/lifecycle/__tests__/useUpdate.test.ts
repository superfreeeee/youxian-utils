import { renderHook } from '@testing-library/react-hooks';

import useUpdate from '../useUpdate';

test('test useUpdate', () => {
  let updateCount = 0;

  const { rerender } = renderHook(() => {
    useUpdate(() => {
      updateCount++;
    });
  });

  expect(updateCount).toBe(1);

  rerender();

  expect(updateCount).toBe(2);

  rerender();

  expect(updateCount).toBe(3);
});
