import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useRenderCount } from '../useRenderCount';

describe('useRenderCount tests', () => {
  test('basic test', () => {
    const { result, rerender } = renderHook(() => useRenderCount());

    expect(result.current).toBe(1);
    rerender();
    rerender();
    rerender();
    expect(result.current).toBe(4);
  });
});
