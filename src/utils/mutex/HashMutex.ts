import { IMutex } from './base';

/**
 * Solve race-condition by memorize last caller of same mutex object
 */
export class HashMutex implements IMutex {
  // Only memo id created by lastest next call
  private lastId = {};

  next() {
    const nextId = {};
    this.lastId = nextId;
    /**
     * return `IsExpired` function
     * check if current next is last caller
     */
    return () => this.lastId !== nextId;
  }
}
