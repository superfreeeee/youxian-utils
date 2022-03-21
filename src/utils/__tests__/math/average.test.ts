import { average } from '../../math';

describe('average tests', () => {
  test('normal test 1', () => {
    expect(average()).toBeNaN();
  });

  test('normal test 2', () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3);
  });

  test('normal test 3', () => {
    expect(average(1, 3, 5, 7, 9)).toBe(5);
  });

  test('normal test 4', () => {
    expect(average(2, 4, 6, 8)).toBe(5);
  });

  test('normal test 5', () => {
    const nums = Array.from(Array(100), (_, i) => i + 1);
    expect(average(...nums)).toBeCloseTo(50.5);
  });
});
