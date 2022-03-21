export interface Deferred<T, E = Error> {
  promise: Promise<T>;
  resolve: (res: T) => void;
  reject: (err: E) => void;
}
