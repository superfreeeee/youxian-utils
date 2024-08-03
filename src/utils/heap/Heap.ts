import { IHeap, OrdFn } from './base';

/**
 * MinHeap implementation
 *
 * @description
 * use number as key, bind to relative data with type T \
 *
 */
export class Heap<T> implements IHeap<T> {
  private ordFn: OrdFn<T>;
  private dataList: T[] = [];

  constructor(ordFn: OrdFn<T>) {
    this.ordFn = ordFn;
  }

  push(data: T): void {
    this.dataList.push(data);
    this.heapifyUp(this.dataList.length - 1);
  }

  private heapifyUp(i: number) {
    let p: number;
    // until meet root
    while ((p = this.parent(i)) >= 0) {
      const cmp = this.ordFn(this.dataList[i], this.dataList[p]);
      if (cmp < 0) {
        [this.dataList[p], this.dataList[i]] = [this.dataList[i], this.dataList[p]];
        i = p;
      } else {
        break; // done
      }
    }
  }

  pop(): T | undefined {
    if (this.dataList.length === 0) {
      return undefined;
    }
    if (this.dataList.length === 1) {
      return this.dataList.pop();
    }

    const res = this.dataList[0];
    this.dataList[0] = this.dataList.pop() as T; // assert exists
    this.heapifyDown(0);
    return res;
  }

  private heapifyDown(i: number) {
    while (this.left(i) < this.dataList.length) {
      const l = this.left(i);
      const r = l + 1;

      let c = i;
      const cmp1 = this.ordFn(this.dataList[l], this.dataList[c]);
      if (cmp1 <= 0) {
        c = l;
      }
      if (r < this.dataList.length) {
        const cmp2 = this.ordFn(this.dataList[r], this.dataList[c]);
        if (cmp2 <= 0) {
          c = r;
        }
      }
      if (c !== i) {
        [this.dataList[c], this.dataList[i]] = [this.dataList[i], this.dataList[c]];
        i = c;
      } else {
        break; // done
      }
    }
  }

  peek(): T | undefined {
    return this.dataList[0];
  }

  private parent(i: number) {
    if (i <= 0) {
      return -1;
    }
    return Math.floor((i - 1) / 2);
  }

  private left(i: number) {
    return 2 * i + 1;
  }

  size(): number {
    return this.dataList.length;
  }

  isEmpty(): boolean {
    return this.dataList.length === 0;
  }
}
