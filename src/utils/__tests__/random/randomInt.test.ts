import Log from '../../../libs/logger';
import { average } from '../../math';
import { randomInt } from '../../random';

const createNums = (count: number, max?: number): number[] => {
  const nums: number[] = [];
  for (let i = 0; i < count; i++) {
    max ? nums.push(randomInt(max)) : nums.push(randomInt());
  }
  return nums;
};

const getStatistic = (nums: number[], expectedAvg: number) => {
  const count = nums.length;
  const avg = average(...nums);
  const delta = Math.abs(avg - expectedAvg);
  return { count, avg, delta };
};

describe('randomInt tests', () => {
  test('basic test', () => {
    const nums = createNums(1000);
    const { avg, delta } = getStatistic(nums, 0);

    Log.info('nums', nums);
    Log.info('average', avg);
    Log.info('expectedAvg', 0);
    Log.info('delta', delta);

    expect(delta).toBe(0);
  });

  Array.from(Array(5), (_, i) => {
    test(`normal test ${i + 1}`, () => {
      const MAX = 1000;
      const expectedAvg = MAX / 2;

      const nums = createNums(1000, MAX);
      const { avg, delta } = getStatistic(nums, expectedAvg);

      Log.info('nums', nums);
      Log.info('average', avg);
      Log.info('expectedAvg', expectedAvg);
      Log.info('delta', delta);

      expect(delta).toBeLessThan(expectedAvg / 10);
    });
  });
});
