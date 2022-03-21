import { defer } from '..';

describe('defer-promise tests', () => {
  test('resolve test', (done) => {
    const deferred = defer<number>();

    deferred.promise.then((res) => {
      expect(res).toBe(1);
      done();
    });

    deferred.resolve(1);
  });

  test('reject test', (done) => {
    const deferred = defer<number>();

    const error = new Error('error test');

    deferred.promise
      .then((res) => {
        fail('unexpected branch');
      })
      .catch((err) => {
        expect(err).toBe(error);
        done();
      });

    deferred.reject(error);
  });

  test('timeout test', (done) => {
    const deferred = defer<number>({ timeout: 0 });

    deferred.promise.catch((err) => {
      expect(err).toBeInstanceOf(Error);
      done();
    });
  });
});
