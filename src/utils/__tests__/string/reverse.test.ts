import { reverse } from '../../string';

describe('test reverse', () => {
  test('normal test 1', () => {
    expect(reverse('12345')).toBe('54321');
  });

  test('normal test 2', () => {
    expect(reverse('ab')).toBe('ba');
  });

  test('normal test 3', () => {
    expect(reverse('AAAAAB')).toBe('BAAAAA');
  });
});
