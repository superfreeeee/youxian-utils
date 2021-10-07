import { range } from '../../math';

describe('test range', () => {
  test('normal test 1', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('normal test 2', () => {
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('normal test 3', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('normal test 4', () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9]);
  });

  test('normal test 5', () => {
    expect(range(1, 10, 3)).toEqual([1, 4, 7]);
  });

  test('normal test 6', () => {
    expect(range(20, 50, 5)).toEqual([20, 25, 30, 35, 40, 45]);
  });
});
