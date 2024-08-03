import Log from '../../../libs/logger';
import { createTimer } from '../../time';
import { sleep } from '../../time/sleep';

/**
 * Baisc Test
 */
describe('createTimer tests', () => {
  test('basic test', () => {
    return new Promise<void>((resolve) => {
      const DELAY = 20;

      const startTime = Date.now();
      const { next } = createTimer(DELAY);
      next(() => {
        const endTime = Date.now();
        const actualDelay = (endTime - startTime) / 1000;
        const expectDelay = DELAY / 1000;

        Log.info(`actual delay: ${actualDelay}(expect: ${expectDelay})`);

        expect(actualDelay).toBeCloseTo(expectDelay, 2);
        resolve();
      });
    });
  });

  test('next after wating test', () => {
    return new Promise<void>((resolve) => {
      const DELAY = 20;

      const startTime = Date.now();
      const { next } = createTimer(DELAY);

      /**
       * 等待 2 * DELAY 之后调用 next
       * 0 --- 2        计时器可用
       * 0 --- --- next
       *
       * 实际 delay：
       *   end - start = (2 * DELAY) > DELAY
       *   active - start  ~= 0
       */
      sleep(DELAY * 2).then(() => {
        const activeTime = Date.now();
        next(() => {
          const endTime = Date.now();
          const actualDelay = (endTime - startTime) / 1000;
          const expectDelay = DELAY / 1000;
          const activeDelay = (endTime - activeTime) / 1000;

          Log.info(`actual delay: ${actualDelay}(expect: >${expectDelay}), active delay: ${activeDelay}(expect: ${0})`);

          expect(actualDelay).toBeGreaterThan(expectDelay);
          expect(activeDelay).toBeCloseTo(0, 1);

          resolve();
        });
      });
    });
  });

  test('reset test', () => {
    return new Promise<void>((resolve) => {
      const DELAY = 20;

      const startTime = Date.now();
      const { next, reset } = createTimer(DELAY);

      const RESET_DELAY = DELAY * 0.8;

      sleep(RESET_DELAY).then(() => {
        // reset in RESET_DELAY
        reset();

        next(() => {
          const endTime = Date.now();
          const actualDelay = (endTime - startTime) / 1000;
          const expectDelay = (DELAY + RESET_DELAY) / 1000;

          Log.info(`actual delay: ${actualDelay}(expect: ${expectDelay})`);

          expect(actualDelay).toBeCloseTo(expectDelay, 1);
          resolve();
        });
      });
    });
  });

  test('cancel test', () => {
    return new Promise<void>((resolve) => {
      const DELAY = 20;
      const { next } = createTimer(DELAY);

      let executed = false;
      const cancel = next(() => {
        executed = true;
      });

      setTimeout(() => {
        cancel();
      }, DELAY / 2);

      setTimeout(() => {
        expect(executed).toBe(false);
        resolve();
      }, DELAY * 1.5);
    });
  });
});
