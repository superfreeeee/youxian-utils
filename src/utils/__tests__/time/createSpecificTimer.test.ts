import Log from '../../../libs/logger';
import { createSpecificTimer } from '../../time';
import { waitAsync } from '../utils';

test('test createSpecificTimer', (done) => {
  const DELAY = 1000;

  const startTime = Date.now();
  const { next } = createSpecificTimer(DELAY);
  next(() => {
    const actualDelay = (Date.now() - startTime) / 1000;
    const expectDelay = DELAY / 1000;

    Log.info(`actualDelay: ${actualDelay}, expectDelay: ${expectDelay}`);

    expect(actualDelay).toBeCloseTo(expectDelay, 0);
    done();
  });
});

test('test createSpecificTimer2', (done) => {
  const DELAY = 1000;

  const startTime = Date.now();
  const { next } = createSpecificTimer(DELAY);

  waitAsync(DELAY * 2).then(() => {
    const activeTime = Date.now();
    next(() => {
      const actualDelay = (Date.now() - startTime) / 1000;
      const expectDelay = DELAY / 1000;
      const activeDelay = (Date.now() - activeTime) / 1000;

      Log.info(`actualDelay: ${actualDelay}, expectDelay: ${expectDelay}`);

      expect(actualDelay).toBeGreaterThan(expectDelay);
      expect(activeDelay).toBeCloseTo(0, 0);

      done();
    });
  });
});
