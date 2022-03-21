import { once } from '../../optimization';

test('test cache', () => {
  let doCount = 0;
  let res: number | null = null;

  const NUM = 0x123456;

  const fn = (): number => {
    doCount++;
    return NUM;
  };

  // 执行前
  expect(res).toBe(null);
  expect(doCount).toBe(0);

  const onceFn = once(fn);

  // 第一次执行
  res = onceFn();
  expect(res).toBe(NUM);
  expect(doCount).toBe(1);

  // 第二次执行
  res = onceFn();
  expect(res).toBe(NUM);
  expect(doCount).toBe(1);
});
