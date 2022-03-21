import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useRef } from 'react';

import { useUnMount } from '../useUnMount';

describe('useUnMount tests', () => {
  test('basic test', () => {
    const { result } = renderHook(() => {
      const isUnMountedRef = useRef(false);

      useUnMount(() => {
        isUnMountedRef.current = true;
      });

      return { isUnMountedRef };
    });

    expect(result.current.isUnMountedRef.current).toBe(false);

    act(() => {
      cleanup();
    });

    expect(result.current.isUnMountedRef.current).toBe(true);
  });
});
