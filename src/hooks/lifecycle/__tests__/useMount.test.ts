import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';

import { useMount } from '../useMount';

describe('useMount tests', () => {
  test('basic test', () => {
    const { result } = renderHook(() => {
      const isMountedRef = useRef(false);

      useMount(() => {
        isMountedRef.current = true;
      });

      return { isMountedRef };
    });

    expect(result.current.isMountedRef.current).toBe(true);
  });
});
