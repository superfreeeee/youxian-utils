import Log from '../../../libs/logger';
import { randomBoolean } from '../../random';

describe('randomBoolean tests', () => {
  Array(5)
    .fill(0)
    .forEach((_, i) => {
      test(`normal test ${i}`, () => {
        let trueCount = 0;
        let falseCount = 0;

        const TIMES = 1000;

        for (let i = 0; i < TIMES; i++) {
          const bool = randomBoolean();
          bool ? trueCount++ : falseCount++;
        }

        Log.info(`trueCount: ${trueCount}, falseCount: ${falseCount}`);

        expect(Math.abs(trueCount - falseCount)).toBeLessThan(TIMES / 10);
      });
    });
});
