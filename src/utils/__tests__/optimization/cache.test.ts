import { cache } from './../../optimization';

test('test cache', () => {
  let doCount = 0;
  let res = null;

  const NUM = 0x123456;

  const fn = (): number => {
    doCount++;
    return NUM;
  };

  // 执行前
  expect(res).toBe(null);
  expect(doCount).toBe(0);

  const cachedFn = cache(fn);

  // 第一次执行
  res = cachedFn();
  expect(res).toBe(NUM);
  expect(doCount).toBe(1);

  // 第二次执行
  res = cachedFn();
  expect(res).toBe(NUM);
  expect(doCount).toBe(1);
});
