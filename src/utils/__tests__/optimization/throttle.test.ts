import { throttle } from '../../optimization';
import { waitAsync } from '../utils';

test('test throttle 1', async () => {
  let count = 0;
  const increment = () => count++;

  const throttledIncrement = throttle(increment);

  // 连点 五次
  throttledIncrement();
  throttledIncrement();
  throttledIncrement();
  throttledIncrement();
  throttledIncrement();

  expect(count).toBe(0);

  await waitAsync(1000);

  expect(count).toBe(1);
});

test('test throttle 2', async () => {
  let count = 0;
  const increment = () => count++;

  const throttledIncrement = throttle(increment);

  // 连点 五次 间隔 200ms
  throttledIncrement(); // ...1
  await waitAsync(200);
  expect(count).toBe(0);

  throttledIncrement(); // x
  await waitAsync(200); // +1
  expect(count).toBe(1);

  throttledIncrement(); // ...2
  await waitAsync(200);
  expect(count).toBe(1);

  throttledIncrement(); // x
  await waitAsync(200); // +2
  throttledIncrement(); // ...3
  await waitAsync(200);
  expect(count).toBe(2);

  await waitAsync(200);
  throttledIncrement(); // ...4
  await waitAsync(1000);

  expect(count).toBe(4);
});
