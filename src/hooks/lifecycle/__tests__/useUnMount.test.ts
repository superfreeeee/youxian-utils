import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import useUnMount from '../useUnMount';

test('test useUnMount', () => {
  let hasUnMount = false;

  renderHook(() => {
    useUnMount(() => {
      hasUnMount = true;
    });
  });

  expect(hasUnMount).toBe(false);

  act(() => {
    cleanup();
  });

  expect(hasUnMount).toBe(true);
});
