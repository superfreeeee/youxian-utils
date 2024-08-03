/**
 * Function that determine order of two items
 *
 * @returns
 * t1 < t2 => n < 0
 * t1 = t2 => n = 0
 * t1 > t2 => n > 0
 */
export type OrdFn<T> = (t1: T, t2: T) => number;

/**
 * Common Heap interface, fit for both MinHeap and MaxHeap
 */
export interface IHeap<T> {
  /**
   * Insert new item into heap
   */
  push(data: T): void;

  /**
   * Remove and return next item
   */
  pop(): T | undefined;

  /**
   * Return but do not remove next item
   */
  peek(): T | undefined;

  /**
   * Get rest items count in heap
   */
  size(): number;

  /**
   * this.size() === 0
   */
  isEmpty(): boolean;
}
