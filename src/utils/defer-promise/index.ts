export interface Deferred<T, E = Error> {
  promise: Promise<T>;
  resolve: (res: T) => void;
  reject: (err: E) => void;
}

export class DeferTimeout extends Error {}

interface DeferOptions {
  /**
   * Auto reject after timeout, unit: ms
   */
  timeout?: number;
}

/**
 * Deferred Promise implementation
 * @returns
 */
export const defer = <T, E = Error>(options: DeferOptions = {}): Deferred<T, E> => {
  const deferred = {} as Deferred<T, E>;
  deferred.promise = new Promise<T>((_resolve, _reject) => {
    deferred.resolve = _resolve;
    deferred.reject = _reject;

    if (options.timeout != null) {
      setTimeout(() => {
        _reject(new DeferTimeout('Deferred timeout rejected'));
      }, options.timeout);
    }
  });
  return deferred;
};
