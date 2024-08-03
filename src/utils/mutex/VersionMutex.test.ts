import { VersionMutex } from './VersionMutex';

describe('VersionMutex tests', () => {
  test('Create Mutex', () => {
    const mutex = new VersionMutex();
    expect(mutex).toBeDefined();
  });

  test('Async sequence test', () => {
    const mutex = new VersionMutex();

    const isExpired_1 = mutex.next();
    expect(isExpired_1()).toBe(false);

    const isExpired_2 = mutex.next();
    const isExpired_3 = mutex.next();
    expect(isExpired_1()).toBe(true);
    expect(isExpired_2()).toBe(true);
    expect(isExpired_3()).toBe(false);
  });
});
