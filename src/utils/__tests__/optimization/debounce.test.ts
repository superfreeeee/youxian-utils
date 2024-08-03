import { debounce } from '../../optimization';
import { sleep } from '../../time/sleep';

test('test debounce 1', async () => {
  let count = 0;
  const increment = () => count++;

  const debouncedIncrement = debounce(increment, 10);

  // 模拟连续点击五次
  debouncedIncrement();
  debouncedIncrement();
  debouncedIncrement();
  debouncedIncrement();
  debouncedIncrement();

  // 不会马上生效
  expect(count).toBe(0);

  await sleep(20);

  // 只触发最后一次
  expect(count).toBe(1);
});

test('test debounce 2', async () => {
  let count = 0;
  const increment = () => count++;

  const debouncedIncrement = debounce(increment, 10);

  // 模拟连点 5 次，间隔 300 ms
  debouncedIncrement();

  await sleep(20);
  expect(count).toBe(1);

  debouncedIncrement();

  await sleep(20);
  expect(count).toBe(2);

  debouncedIncrement();

  await sleep(20);
  expect(count).toBe(3);

  debouncedIncrement();

  await sleep(20);
  expect(count).toBe(4);

  debouncedIncrement();

  await sleep(20);
  expect(count).toBe(5);
});
