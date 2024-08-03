import { randomInt } from 'crypto';

describe('randomInt tests', () => {
  test('monkey test', () => {
    for (let i = 0; i < 100000; i++) {
      const num = randomInt(10);
      if (num < 0 || num >= 10) {
        throw new Error(`unexpect num = ${num}`);
      }
    }
  });
});
