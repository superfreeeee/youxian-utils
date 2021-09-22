import { renderHook } from '@testing-library/react-hooks';

import useMount from '../useMount';

test('test useMount', () => {
  let hasMount = false;

  renderHook(() => {
    useMount(() => {
      hasMount = true;
    });
  });

  expect(hasMount).toBe(true);
});
