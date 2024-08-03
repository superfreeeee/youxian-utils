import { sleep } from './sleep';

test('sleep test', async () => {
  const t0 = Date.now();
  await sleep(10);
  expect(Date.now() - t0).toBeGreaterThanOrEqual(0);
});
