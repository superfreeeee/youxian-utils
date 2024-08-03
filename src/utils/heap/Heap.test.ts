import { randomInt } from '../random';
import { Heap } from './Heap';

const monkeyTestForMinHeap = (it: number, max: number) => {
  const heap = new Heap<number>((t1, t2) => t1 - t2);
  for (let i = 0; i < it; i++) {
    heap.push(randomInt(max));
  }

  let last = -1;
  while (!heap.isEmpty()) {
    const next = heap.pop();
    if (next === undefined || next < last) {
      throw new Error('fail');
    }
    last = next;
  }
};

const monkeyTestForMaxHeap = (it: number, max: number) => {
  const heap = new Heap<number>((t1, t2) => t2 - t1);
  for (let i = 0; i < it; i++) {
    heap.push(randomInt(max));
  }

  let last = max + 1;
  while (!heap.isEmpty()) {
    const next = heap.pop();
    if (next === undefined || next > last) {
      throw new Error('fail');
    }
    last = next;
  }
};

describe('MinHeap tests', () => {
  test('monkey test', () => {
    monkeyTestForMinHeap(1000, 10000);
  });

  test('monkey test 2', () => {
    monkeyTestForMinHeap(10000, 1000);
  });
});

describe('MaxHeap tests', () => {
  test('monkey test', () => {
    monkeyTestForMaxHeap(1000, 10000);
  });

  test('monkey test 2', () => {
    monkeyTestForMaxHeap(10000, 1000);
  });
});
