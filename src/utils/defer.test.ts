import { defer } from './defer';

describe('defer-promise tests', () => {
  test('resolve test', () => {
    return new Promise<void>((resolve) => {
      const deferred = defer<number>();

      deferred.promise.then((res) => {
        expect(res).toBe(1);
        resolve();
      });

      deferred.resolve(1);
    });
  });

  test('reject test', () => {
    return new Promise<void>((resolve) => {
      const deferred = defer<number>();

      const error = new Error('error test');

      deferred.promise
        .then(() => {
          throw new Error('unexpected branch');
        })
        .catch((err) => {
          expect(err).toBe(error);
          resolve();
        });

      deferred.reject(error);
    });
  });

  test('timeout test', () => {
    return new Promise<void>((resolve) => {
      const deferred = defer<number>({ timeout: 0 });

      deferred.promise
        .then(() => {
          throw new Error('unexpected branch');
        })
        .catch((err) => {
          expect(err).toBeInstanceOf(Error);
          resolve();
        });
    });
  });
});
