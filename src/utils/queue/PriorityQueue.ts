import { Heap } from '../heap/Heap';

export type PriorityFn<T> = (data: T) => number;

type Item<T> = {
  priority: number;
  data: T;
};

/**
 * Priority Queue with MinHeap implementation
 */
export class PriorityQueue<T> {
  private priorityFn: PriorityFn<T>;
  private heap: Heap<Item<T>>;

  constructor(priorityFn: (data: T) => number) {
    this.priorityFn = priorityFn;
    this.heap = new Heap((t1, t2) => t1.priority - t2.priority);
  }

  enqueue(data: T) {
    const priority = this.priorityFn(data);
    this.heap.push({ priority, data });
  }

  dequeue(): T | undefined {
    return this.heap.pop()?.data;
  }

  peek(): T | undefined {
    return this.heap.peek()?.data;
  }

  size() {
    return this.heap.size();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }
}
