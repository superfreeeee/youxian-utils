import { sum } from '../../math';

describe('test sum', () => {
  test('normal case 1', () => {
    expect(sum()).toBe(0);
  });

  test('normal case 2', () => {
    expect(sum(1)).toBe(1);
  });

  test('normal case 3', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  test('normal case 4', () => {
    const nums = Array.from(Array(100), (_, i) => i + 1);
    expect(sum(...nums)).toBe(5050);
  });
});
