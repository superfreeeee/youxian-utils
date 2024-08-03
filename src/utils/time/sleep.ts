/**
 * Create a Promise resolved in specific ms later
 * @param delay resolve in delay ms
 * @returns
 */
export const sleep = (delay: number) => new Promise<void>((resolve) => setTimeout(resolve, delay));
