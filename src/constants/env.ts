import { DEBUG_KEY } from './keys';

export const isDev = process.env.DEBUG === DEBUG_KEY;
