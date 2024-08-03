export type IsExpired = () => boolean;

export interface IMutex {
  next(): IsExpired;
}
