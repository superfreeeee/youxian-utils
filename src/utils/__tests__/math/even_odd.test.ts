import { isEven, isOdd } from './../../math';

describe('test isEven', () => {
  test('normal test 1', () => {
    expect(isEven(2)).toBe(true);
  });

  test('normal test 2', () => {
    expect(isEven(3)).toBe(false);
  });

  test('normal test 3', () => {
    expect(isEven(2020)).toBe(true);
  });

  test('normal test 4', () => {
    expect(isEven(123.456)).toBe(false);
  });
});

describe('test isOdd', () => {
  test('normal test 1', () => {
    expect(isOdd(2)).toBe(false);
  });

  test('normal test 2', () => {
    expect(isOdd(3)).toBe(true);
  });

  test('normal test 3', () => {
    expect(isOdd(2020)).toBe(false);
  });

  test('normal test 4', () => {
    expect(isOdd(123.456)).toBe(false);
  });
});
