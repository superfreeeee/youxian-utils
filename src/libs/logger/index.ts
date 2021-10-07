import debug from 'debug';

import { DEBUG_KEY } from './../../constants/keys';

const logger = debug(DEBUG_KEY);

const Log = {
  info: logger,
  warn: (msg: string, ...args) => logger(`[warn] ${msg}`, ...args),
  error: (msg: string, ...args) => logger(`[error] ${msg}`, ...args),
};

export default Log;
