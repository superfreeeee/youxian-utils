import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';

import { useUpdate } from '../useUpdate';

describe('useUpdate tests', () => {
  test('basic test', () => {
    const { result, rerender } = renderHook(() => {
      const countRef = useRef(0);
      useUpdate(() => {
        countRef.current++;
      });
      return { countRef };
    });

    expect(result.current.countRef.current).toBe(1);
    rerender();
    rerender();
    rerender();
    expect(result.current.countRef.current).toBe(4);
  });
});
