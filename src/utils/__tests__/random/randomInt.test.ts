import { average } from './../../math';
import { isDev } from './../../../constants/env';
import { randomInt } from '../../random';

describe('test randomInt', () => {
  Array.from(Array(5), (_, i) => {
    test(`normal test ${i + 1}`, () => {
      const MAX = 1000;
      const TIMES = 1000;

      const nums = [];
      for (let i = 0; i < TIMES; i++) {
        nums.push(randomInt(MAX));
      }

      const avg = average(...nums);
      const delta = Math.abs(avg - MAX / 2);

      if (isDev) {
        console.log('nums', nums);
        console.log('average', avg);
        console.log('delta', delta);
        console.log('limit', MAX / 20);
      }

      expect(delta).toBeLessThan(MAX / 20);
    });
  });
});
