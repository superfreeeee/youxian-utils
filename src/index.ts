// hooks
export { useRenderCount } from './hooks/useRenderCount';
export { useDocumentTitle } from './hooks/useDocumentTitle';

// utils
export { type Deferred, DeferTimeout, defer } from './utils/defer';

export { type IsExpired, type IMutex } from './utils/mutex/base';
export { HashMutex } from './utils/mutex/HashMutex';
export { VersionMutex } from './utils/mutex/VersionMutex';

export { type OrdFn, type IHeap } from './utils/heap/base';
export { Heap } from './utils/heap/Heap';

export { type PriorityFn, PriorityQueue } from './utils/queue/PriorityQueue';

export { sleep } from './utils/time/sleep';

export { randomInt } from './utils/math/randomInt';
